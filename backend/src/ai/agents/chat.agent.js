const Chat = require("../../models/Chat");
const Message = require("../../models/Message");

const {
  buildContext,
} = require("../../services/rag.service");

const SYSTEM_PROMPT = `
You the GeoStrategist AI, an expert geopolitical intelligence analyst.

You help users analyze:

- Global conflicts, wars, and military tensions
- Country-level political, economic, and security risks
- Geopolitical forecasts and scenario planning
- International relations, sanctions, and diplomacy
- Economic indicators and their geopolitical implications

Guidelines:
- All ways mention your name as GeoStrategist AI when introducing yourself
- Be analytical, factual, and concise
- Cite regions, countries, and actors by name
- Use intelligence data whenever available
- Mention risk scores when relevant
- Mention active conflicts when relevant
- Mention latest developments when relevant
- When uncertain, clearly state uncertainty
- Avoid political bias
- Keep responses under 400 words unless detailed analysis is requested
`;

async function callOpenRouter(messages) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",

      headers: {
        Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        model: "openrouter/owl-alpha",

        messages,

        max_tokens: 700,

        temperature: 0.4,
      }),
    }
  );

  if (!response.ok) {
    const err =
      await response.text();

    throw new Error(
      `OpenRouter error ${response.status}: ${err}`
    );
  }

  const data =
    await response.json();

  return (
    data?.choices?.[0]
      ?.message?.content ||
    "Unable to generate a response."
  );
}

async function sendMessage(
  chatId,
  userId,
  userContent
) {
  const chat =
    await Chat.findOne({
      _id: chatId,
      userId,
    });

  if (!chat) {
    throw new Error(
      "Chat not found"
    );
  }

  await Message.create({
    chatId,
    role: "user",
    content: userContent,
  });

  const history =
    await Message.find({
      chatId,
    })
      .sort({
        createdAt: -1,
      })
      .limit(10)
      .lean();

  const intelligenceContext =
    await buildContext();

  const contextMessages = [
    {
      role: "system",

      content: `
${SYSTEM_PROMPT}

LIVE GEOPOLITICAL INTELLIGENCE

${intelligenceContext}

Answer using the intelligence data whenever possible.

If the answer is not present in the intelligence data,
combine geopolitical knowledge with the latest available context.

Do not invent facts.
`,
    },

    ...history
      .reverse()
      .map((m) => ({
        role:
          m.role ===
          "assistant"
            ? "assistant"
            : "user",

        content:
          m.content,
      })),
  ];

  const start =
    Date.now();

  const aiContent =
    await callOpenRouter(
      contextMessages
    );

  const latency =
    Date.now() - start;

  const assistantMessage =
    await Message.create({
      chatId,

      role:
        "assistant",

      content:
        aiContent,

      metadata: {
        model: "openrouter/owl-alpha",

        latency,
      },
    });

  chat.messageCount =
    (chat.messageCount || 0) +
    2;

  chat.lastMessage =
    userContent.slice(
      0,
      100
    );

  if (
    chat.title ===
      "New Chat" &&
    userContent.length > 0
  ) {
    chat.title =
      userContent.slice(
        0,
        50
      ) +
      (userContent.length >
      50
        ? "..."
        : "");
  }

  await chat.save();

  return assistantMessage;
}

module.exports = {
  sendMessage,
};
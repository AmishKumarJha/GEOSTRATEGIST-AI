import Topbar from "../components/layout/Topbar";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column", 
      height: "100vh",         
      background: "var(--bg, #0b1020)",
      overflow: "hidden",
    }}>
      {/* Top Navigation */}
      <Topbar />

      {/* Main Chat Content Framework */}
      <div style={{
        display: "flex",
        flex: 1,             
        overflow: "hidden",  
      }}>
        {/* Left sidebar: chat history */}
        <ChatSidebar />

        {/* Right context window and interaction deck */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}>
          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
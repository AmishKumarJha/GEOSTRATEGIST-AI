export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="
      bg-[#1A1F30]
      border
      border-[#3C494E]
      rounded-xl
      p-5
      "
    >
      <p
        className="
        text-xs
        uppercase
        tracking-wider
        text-slate-500
        "
      >
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}
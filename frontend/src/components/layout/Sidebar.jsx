import { Link } from "react-router-dom";

const links = [
  { label: "Dashboard", path: "/" },
  { label: "AI Assistant", path: "/chat" },
  { label: "Map Intelligence", path: "/map" },
  { label: "Regional Intelligence", path: "/regions" },
  { label: "Conflict Tracker", path: "/conflicts" },
  { label: "News", path: "/news" },
  { label: "Forecasts", path: "/forecasts" },
];

export default function Sidebar() {
  return (
    <aside
      className="
      hidden
      md:flex
      w-64
      flex-col
      bg-[#161B2B]
      border-r
      border-[#3C494E]
      "
    >
      <div className="p-6 border-b border-[#3C494E]">

        <div className="flex items-center gap-3">

          <div
            className="
            h-10
            w-10
            rounded-lg
            bg-[#1A1F30]
            border
            border-[#3C494E]
            flex
            items-center
            justify-center
            "
          >
            🌐
          </div>

          <div>
            <h2 className="font-semibold text-cyan-300">
              Intelligence Ops
            </h2>

            <p className="text-xs text-slate-500">
              Tier 1 Access
            </p>
          </div>

        </div>

      </div>

      <div className="p-4">

        <button
          className="
          w-full
          py-2
          rounded-lg
          bg-cyan-500/10
          border
          border-cyan-500/20
          text-cyan-300
          "
        >
          + New Analysis
        </button>

      </div>

      <nav className="flex-1 px-4">

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="
            flex
            items-center
            px-4
            py-3
            rounded-lg
            text-slate-400
            hover:bg-[#2F3446]
            hover:text-cyan-300
            transition
            mb-1
            "
          >
            {link.label}
          </Link>
        ))}

      </nav>

    </aside>
  );
}
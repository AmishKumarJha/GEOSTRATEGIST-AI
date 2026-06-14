// Topbar.jsx
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";

export default function Topbar() {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  // Links pulled from your previous sidebar
  const links = [
    { label: "Dashboard", path: "/" },
    { label: "AI Assistant", path: "/chat" },
    { label: "Regional Intelligence", path: "/regions" },
    { label: "Conflict Tracker", path: "/conflicts" },
    { label: "News", path: "/news" },
  ];

  return (
    <header
      className="
      h-16
      bg-[#0E1323]
      border-b
      border-[#3C494E]
      px-6
      flex
      items-center
      justify-between
      w-full
      "
    >
      {/* Left: Logo & Navigation */}
      <div className="flex items-center gap-8">
        <div>
          <h1 className="text-lg font-semibold text-cyan-300 whitespace-nowrap">
            GEOSTRATEGIST AI
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                px-3
                py-2
                rounded-lg
                text-sm
                font-medium
                transition
                ${
                  isActive
                    ? "bg-[#2F3446] text-cyan-300"
                    : "text-slate-400 hover:bg-[#2F3446] hover:text-cyan-300"
                }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right: Search & Profile */}
      <div className="flex items-center gap-6">
        <div
          className="
          hidden
          md:flex
          items-center
          bg-[#1A1F30]
          border
          border-[#3C494E]
          rounded-lg
          px-4
          py-2
          w-[240px]
          xl:w-[360px]
          "
        >
          <input
            type="text"
            placeholder="Search intelligence..."
            className="
            bg-transparent
            outline-none
            text-sm
            w-full
            text-white
            "
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-cyan-300 transition">
            🔔
          </button>

          <button className="text-slate-500 hover:text-cyan-300 transition">
            ⚙️
          </button>

          <div
            className="
            h-9
            w-9
            rounded-full
            bg-[#1A1F30]
            border
            border-[#3C494E]
            flex
            items-center
            justify-center
            text-white
            "
          >
            {(user?.name || "U")[0]}
          </div>
        </div>
      </div>
    </header>
  );
}
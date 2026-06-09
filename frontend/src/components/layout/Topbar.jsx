import useAuthStore from "../../store/authStore";

export default function Topbar() {
  const user =
    useAuthStore((state) => state.user);

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
      "
    >
      <div>

        <h1
          className="
          text-lg
          font-semibold
          text-cyan-300
          "
        >
          GEOSTRATEGIST AI
        </h1>

      </div>

      <div
        className="
        w-[420px]
        hidden
        md:flex
        items-center
        bg-[#1A1F30]
        border
        border-[#3C494E]
        rounded-lg
        px-4
        py-2
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

        <span className="text-slate-500">
          🔔
        </span>

        <span className="text-slate-500">
          ⚙️
        </span>

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
          "
        >
          {(user?.name || "U")[0]}
        </div>

      </div>
    </header>
  );
}
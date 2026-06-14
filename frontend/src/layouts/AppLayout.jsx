// import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileNav from "../components/layout/MobileNav";

export default function AppLayout({ children }) {
  return (
    <div
      className="
      min-h-screen
      flex
      bg-[#0E1323]
      text-[#DEE1F9]
      "
    >
      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main
  className="
  flex-1
  overflow-y-auto
  bg-[#0E1323]
  pt-16
  sm:pt-0
  "
>
          {children}
        </main>

        <MobileNav />
      </div>
    </div>
  );
}
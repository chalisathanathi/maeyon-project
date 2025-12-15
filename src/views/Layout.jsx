import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <div>
      <Navbar />
      <section className="bg-white flex justify-center">
        <Outlet />
      </section>
    </div>
  );
}

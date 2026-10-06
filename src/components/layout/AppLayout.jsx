import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
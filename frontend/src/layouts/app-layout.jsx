import Header from "@/components/custom/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className=""></div>
      <main className="min-h-screen pl-10 pr-10">
        <Header />
        <Outlet />
      </main>
      <div className="p-3 text-center bg-gray-800 mt-10">
        Made with love by Fructueux Jefferson
      </div>
    </div>
  );
};

export default AppLayout;

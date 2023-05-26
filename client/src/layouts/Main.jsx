import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/footer/Footer";

const Main = () => {
  return (
    <div className="font-Roboto w-full max-w-[1240px] m-auto overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* We have have our Footer component  */}
    </>
  );
};

export default Layout;

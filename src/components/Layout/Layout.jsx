import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* We have have our Header component  */}
      <Outlet />
      {/* We have have our Footer component  */}
    </>
  );
};

export default Layout;

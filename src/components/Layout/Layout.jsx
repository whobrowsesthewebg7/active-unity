import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <>
      {/* We have have our Header component  */}
      <Outlet />
      {/* We have have our Footer component  */}
      <Footer />
    </>
  );
};

export default Layout;

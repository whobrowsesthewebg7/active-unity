import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";

import Header from "../../components/Header";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* We have have our Footer component  */}
      <Footer />
    </>
  );
};

export default Layout;

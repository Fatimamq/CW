 import React from "react";
import Navbar from "../header/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      {/* Render the footer on all pages except the login page */}
      {window.location.pathname !== "/login" && <Footer />}
    </>
  );
};

export default Layout;


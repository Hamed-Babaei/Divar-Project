import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-dvh mx-auto px-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

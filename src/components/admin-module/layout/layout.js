import React from "react";
import Sidebar from "./sidebar_components/sidebar";
import Footer from "./footer_components/footer";
import Header from "./header_components/header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Layout;

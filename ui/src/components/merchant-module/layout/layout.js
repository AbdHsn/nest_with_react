import React, { useState } from "react";
import Sidebar from "./sidebar_components/sidebar";
import Footer from "./footer_components/footer";
import Header from "./header_components/header";
import { Outlet } from "react-router-dom";
import RightSidebar from "./sidebar_components/right-sidebar";

const Layout = (props) => {
  const initialState = {
    ltr: true,
    divName: "RTL",
  };

  const [side, setSide] = useState(initialState);

  const ChangeRtl = (divName) => {
    if (divName === "RTL") {
      document.body.classList.add("rtl");
      setSide({ divName: "LTR" });
    } else {
      document.body.classList.remove("rtl");
      setSide({ divName: "RTL" });
    }
  };
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <RightSidebar />
          <div className="page-body">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <div
        className="btn-light custom-theme"
        onClick={() => ChangeRtl(side.divName)}
      >
        {side.divName}
      </div>
    </div>
  );
};
export default Layout;

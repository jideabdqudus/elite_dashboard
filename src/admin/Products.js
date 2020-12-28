import React from "react";
import SiderLayout2 from "../adminLayout/SiderLayout2";
import NavbarTop from "../adminLayout/NavbarTop";

const AdminDash = () => {
  return (
    <div>
      <NavbarTop style={{ position: "fixed" }} />
      <SiderLayout2 />
    </div>
  );
};

export default AdminDash;

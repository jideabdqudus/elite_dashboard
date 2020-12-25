import React from "react";
import SiderLayout from "../adminLayout/SiderLayout";
import NavbarTop from "../adminLayout/NavbarTop";

const AdminDash = () => {
  return (
    <div>
      <NavbarTop style={{ position: "fixed" }} />
      <SiderLayout />
    </div>
  );
};

export default AdminDash;

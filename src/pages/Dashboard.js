import React from "react";
import SiderLayout from "../layout/SiderLayout";
import NavbarTop from "../layout/NavbarTop";

const Dashboard = () => {
  return (
    <div>
      <NavbarTop style={{position:"fixed"}}/>
      <SiderLayout />
    </div>
  );
};

export default Dashboard;

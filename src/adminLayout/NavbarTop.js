import React from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const NavbarTop = () => {
const  history = useHistory()

  const logout=()=>{

       localStorage.removeItem("token")
       history.push("/")
  }
  return (
     
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Elite Investments"
        subTitle="Admin"
        extra={[
          // <Link to="/">
            <Button key="1"  onClick={logout} type="primary" style={{ borderRadius: "30px" }}>
              <LogoutOutlined
                style={{
                  fontSize: 20,
                  verticalAlign: "top",
                }}
              />
            </Button>
          // </Link>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default NavbarTop;

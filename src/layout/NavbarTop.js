import React from "react";
import { PageHeader, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Link ,useHistory} from "react-router-dom";
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
        subTitle=" Dashboard"
        extra={[
          <Link to="/">
            <Button onClick={logout} key="1" type="primary" style={{ borderRadius: "30px" }}>
              <LogoutOutlined
                style={{
                  fontSize: 20,
                  verticalAlign: "top",
                }}
              />
            </Button>
          </Link>,
        ]}
      ></PageHeader>
    </div>
  );
};

export default NavbarTop;

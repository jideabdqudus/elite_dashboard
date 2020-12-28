import React ,{useEffect } from "react";
import SiderLayout4 from "../layout/SiderLayout4";
import NavbarTop from "../layout/NavbarTop";
import { useDispatch,useSelector} from "react-redux";
import { Link ,useHistory} from "react-router-dom";
import { view_all_products} from "../store/action/authAction";

const Investments = () => {
  const  dispatch = useDispatch()
  const  history = useHistory()

  useEffect(() => {
  console.log('object.')
  view_all_products(dispatch,history)

  }, []);
  return (
    <div>
      <NavbarTop />
      <SiderLayout4 />
    </div>
  );
};

export default Investments;

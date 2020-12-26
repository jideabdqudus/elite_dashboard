import { Route,Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

  const  AdminRoute =({component:Component,...rest})=>{
const  {userData}= useSelector(state => state?.auth)
    return (
      <Route {...rest}
      render={(props)=>{
        if( localStorage.getItem("token") && 
        localStorage.getItem("token").startsWith('Bearer')){
          if(userData?.userType==='admin' ){
            console.log(userData.userType)
        return <Component {...props}/>
          }
          else
          return  <Redirect to={{pathname:"/",state:{
            from:props.location
          }}}/>
        
        }else{
         return  <Redirect to={{pathname:"/",state:{
            from:props.location
          }}}/>
        }
      }}
      />
    )
  }
  const ProtectedRoute = ({component:Component,...rest})=>{
const  {userData}= useSelector(state => state?.auth)
    return (
      <Route {...rest}
      render={(props)=>{
        if( localStorage.getItem("token") && 
        localStorage.getItem("token").startsWith('Bearer')){
          if(userData?.userType==='user' ){
            console.log(userData.userType)
        return <Component {...props}/>
          }
          if(userData?.userType==='admin' ){
        return <Redirect to={{pathname:"/admin/dashboard",state:{
          from:props.location
        }}}/>
          }
        }else{
         return  <Redirect to={{pathname:"/",state:{
            from:props.location
          }}}/>
        }
      }}
      />
    )
  }
   const GuestRoute= ({component:Component,...rest})=>{
const  {userData}= useSelector(state => state?.auth)
    return (
      <Route {...rest}
      render={(props)=>{
        if( !localStorage.getItem("token")){
        return <Component {...props}/>
        }else{
          if(userData?.userType==='admin'){
           return <Redirect to={{pathname:"/admin/dashboard",state:{
              from:props.location
            }}}/>
          }
          if(userData?.userType==='user'){
          return   <Redirect to={{pathname:"/dashboard",state:{
              from:props.location
            }}}/>
          }
        }
      }}
      />
    )
  }
  export {GuestRoute,AdminRoute,ProtectedRoute}
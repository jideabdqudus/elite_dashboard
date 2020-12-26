import {
  LOGIN_ERROR,
  ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SUCCESS,
  USER_DATA,
  OTP_SUCCESS,
  OTP_ERROR
 } from './types'
// import Api from '../../config/api'
import Api from '../../config/api'
export const login= (formData,dispatch,history,yes)=>{
  if(yes==='yes'){

    Api().post("/user/login",formData)
    .then(res=>{
      if(res.data.success===true){
        console.log(res.data.data.user)
        localStorage.setItem('token',res.data.data.token);
        console.log(res.data.message)
        dispatch({type:LOGIN_SUCCESS,payload:{
          user:res.data.data.user,
          message:res.data.message
        }})
      history.push("/dashboard")
    }
    })
    .catch(e=>{
      dispatch({type:LOGIN_ERROR,payload:e.response?.data.message})
    })
  }
  else{
    dispatch({type:LOGIN_SUCCESS,payload:{
      // user:res.data.data.user,
      // message:res.data.message
    }})
  }
}
export const register= (formData,dispatch,history)=>{


  Api().post("/user/register",formData)
  .then(auth=>{
    // console.log(auth)
    if(auth.data.success===true){
    console.log(auth.data.success)
      dispatch({type:REGISTER_SUCCESS,payload:auth.data.message})
    // history.push("/")
    }
    
  })
  .catch(e=>{
    // console.log(e)
    dispatch({type:REGISTER_ERROR,payload:e.response?.data.message})
  })
}

export const setStateError= (dispatch)=>{
  dispatch({type:ERROR,payload:''})
}


export const setStateSuccess= (dispatch)=>{
  dispatch({type:SUCCESS,payload:''})
}
export const getUserProfile= (dispatch,history)=>{
  if(localStorage.getItem("token")){
    if(localStorage.getItem("token").startsWith('Bearer ')){
      Api().get("/user/get_profile")
      .then(auth=>{
        console.log(auth.data.data)
        dispatch({type:USER_DATA,payload:auth.data.data})
      }
        )
      .catch(e=>{
  localStorage.removeItem("token")
  // history.push("/")

      })
    }else{
  localStorage.removeItem("token")
  // history.push("/")


    }

  }
  
}

export const Verify_otp= (formData,dispatch,history)=>{
console.log(formData)

  Api().post("/user/verify_otp",formData)
  .then(auth=>{
    // console.log(auth)
    if(auth.data.success===true){
    console.log(auth.data.success)
      dispatch({type:OTP_SUCCESS,payload:auth.data.message})
    history.push("/")
    }
    
  })
  .catch(e=>{
    console.log(e.response)
    // if(e.response.data.message='account has been activated please proceed to log in'){
    //   dispatch({type:OTP_ERROR,payload:e.response?.data.message})
    // history.push("/")
    // }
    dispatch({type:OTP_ERROR,payload:e.response?.data.message})

  })
}


export const resend_otp= (formData,dispatch,history)=>{
  console.log(formData)
  
    Api().post("/user/resend_otp",formData)
    .then(auth=>{
      console.log(auth)
      if(auth.data.success===true){
      console.log(auth.data.success)
        dispatch({type:OTP_SUCCESS,payload:auth.data.message})
      history.push("/")
      }
      
    })
    .catch(e=>{
      console.log(e.response)
      dispatch({type:OTP_ERROR,payload:e.response?.data.message})
      history.push("/")
  
    })
  }
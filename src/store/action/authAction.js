import {
  LOGIN_ERROR,
  ADMIN_DASH,
  ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  SUCCESS,
  USER_DATA,
  OTP_SUCCESS,
  OTP_ERROR,
  PRODUCT_FETCH_SUCCESS,
 } from './types'
// import Api from '../../config/api'
import Api from '../../config/api'
export const login= (formData,dispatch,history,yes)=>{

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
      })
    }else{
  localStorage.removeItem("token")
    }}}

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
  console.log({formData})
    Api().post("/user/resend_otp",formData)
    .then(auth=>{
      if(auth.data.success===true){
        dispatch({type:OTP_SUCCESS,payload:auth.data.message})
      history.push("/")
      }
      
    })
    .catch(e=>{
      dispatch({type:OTP_ERROR,payload:e.response?.data.message})
      history.push("/")
  
    })
  
  }


  export const create_investment= (formData,dispatch,history)=>{
    console.log({formData})
      Api().post("/investment/create_investment",formData)
      .then(auth=>{
        console.log(auth)
        if(auth.data.success===true){
        view_all_products(dispatch,history)

          dispatch({type:OTP_SUCCESS,payload:auth.data.message})
        // history.push("/")

        }
        
      })
      .catch(e=>{
        dispatch({type:OTP_ERROR,payload:e.response?.data.message})
        
        // history.push("/")
    
      })
    
    }
    
  export const delete_investment= (dispatch,id,history)=>{
      Api().delete(`/investment/delete_each_product/${id}`)
      .then(auth=>{
        console.log(auth)
        if(auth.data.success===true){
          view_all_products(dispatch,history)
        console.log(auth.data.success)
          dispatch({type:SUCCESS,payload:auth.data.message})
        // history.push("/")

        }
        
      })
      .catch(e=>{
        console.log(e.response)
        dispatch({type:ERROR,payload:e.response?.data.message})
        
        // history.push("/")
    
      })
    
    }
    

  export const view_all_products= (dispatch,history)=>{
      Api().get("/investment/view_all_product")
      .then(auth=>{
        console.log(auth.data.data)
        if(auth.data.success===true){
          dispatch({type:PRODUCT_FETCH_SUCCESS,
            // payload:auth.data.message,
            products:auth.data.data})
        // history.push("/")
        }
        
      })
      .catch(e=>{
        console.log(e.response)
        dispatch({type:OTP_ERROR,payload:e.response?.data.message})
        // history.push("/")
        // return 
    
      })
    
    }
    // 
    export const adminDashboard= (dispatch,history)=>{
      Api().get("/admin/adminDashboard")
      .then(auth=>{
        console.log(auth.data.data)
        if(auth.data.success===true){
          // {all_product: Array(24), active_user: Array(2)}
          let activeuser = auth.data.data.active_user
          let all_product = auth.data.data.all_product
          console.log(all_product)
          dispatch({type:ADMIN_DASH,
            // payload:auth.data.message,
            active_user:activeuser,
            products:all_product})
        // history.push("/")
        return auth.data.data
        }
        return 

        
      })
      .catch(e=>{
        console.log(e.response)
        // dispatch({type:OTP_ERROR,payload:e.response?.data.message})
        // history.push("/")
        return null
    
      })
    
    }
    
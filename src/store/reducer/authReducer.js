import {LOGIN_ERROR,ERROR,SUCCESS,
    REGISTER_SUCCESS,REGISTER_ERROR,OTP_SUCCESS,
    USER_DATA,LOGIN_SUCCESS, OTP_ERROR} from '../action/types'
import {initialState} from '../state/stateManagement'
const auth=(state=initialState,action)=>{
switch(action.type){
        case LOGIN_ERROR:
            console.log(action)
        return{
            ...state,
            error:action.payload,
        }
        case ERROR:
          
        return{
            ...state,
            error:action.payload,
        }
        case USER_DATA:
        return{
            ...state,
            userData:action.payload,
        }
        case REGISTER_SUCCESS:
          
        return{
            ...state,
            success:action.payload,
        }
        case LOGIN_SUCCESS:
          
            return{
                ...state,
                success:action.payload.message,
                userData:action.payload.user
            }
        case SUCCESS:
        return{
            ...state,
            success:action.payload,
        }
        case OTP_SUCCESS:
                return{
                    ...state,
            success:action.payload,
                }
        case OTP_ERROR:
               return{
                    ...state,
            error:action.payload,
                }
        case REGISTER_ERROR:
            
        return{
            ...state,
            error:action.payload,
        }
    default:
        return state
  }
}
export default auth
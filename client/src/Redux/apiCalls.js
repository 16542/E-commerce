// import { publicRequest } from "../requestMethode";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import axios from "axios";
import { publicRequest } from "../requestMethode";

// try to log in 
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login",user);
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(loginFailure());
  }
};


// Create a new user  
export const newUser = async (dispatch,user)=>{
    dispatch(registerStart());
    try {
      const res = await publicRequest.post("/auth/register",user)
      dispatch(registerSuccess(res.data))
      console.log(res.data)
    } catch (err) {
      dispatch(registerFailure())
      console.log(err)
    }

}

import { publicRequest, userRequest } from "../RequestMethods";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
} from "./userRedux";
import axios from "axios";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productRedux";

export const login = async (dispatch, username, password) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      username,
      password,
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    console.log(err);
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
    console.log(err);
  }
};
export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
    console.log(err);
  }
};
export const updateProducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    //update

    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
    console.log(err);
  }
};

export const addProducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    //ADD Product
    const res = await userRequest.post(`/products/`, product);

    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
    console.log(err);
  }
};

// GET ALL USERS

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  // console.log("Nav",res.data)
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
    console.log(err);
  }
};

export const DeleteUsers = async (id,dispatch)=>{
    dispatch(deleteUserStart());
    try{
    // const res = await userRequest.delete(`/users/${id}`)
      dispatch(deleteUserSuccess(id))
    }catch(err){
      dispatch(deleteUserFailure())
    }
}

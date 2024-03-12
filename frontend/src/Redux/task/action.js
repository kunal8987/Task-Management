import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../UserAuth/actionType";
import axios from "axios";
let token = localStorage.getItem("adminToken");

export const getTasks = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  axios
    .get(`${process.env.REACT_APP_URL}tasks/get/task`, {
      Headers: { Authorization: token },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({ type: REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REQUEST_PENDING });
    });
};

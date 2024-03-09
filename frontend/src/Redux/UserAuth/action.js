import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "./actionType.js";

const registerUser = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .post(`${process.env.REACT_APP_URL}users/register`, payload)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: REQUEST_SUCCESS });
    })
    .catch((error) => {
      console.log(error.massage);
      dispatch({ type: REQUEST_PENDING });
    });
};

// const loginData = (payload) => (dispatch) => {
//   dispatch({ type: REQUEST_LOADING });

//   axios
//     .post(`${process.env.REACT_API_URL}/users/login`, payload)
//     .then((response) => {
//       console.log(response.data.token);
//       localStorage.setItem("adminToken", JSON.stringify(res.data.token));
//       dispatch({ type: REQUEST_SUCCESS });
//     })
//     .catch((error) => {
//       console.log(error.massage);
//       dispatch({ type: REQUEST_PENDING });
//     });
// };

export { registerUser };

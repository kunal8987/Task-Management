import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "../UserAuth/actionType";

let initialState = {
  isLoading: false,
  isError: false,
  taskArray: [],
};
export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REQUEST_PENDING:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        taskArray: payload,
      };
    default:
      return state;
  }
};

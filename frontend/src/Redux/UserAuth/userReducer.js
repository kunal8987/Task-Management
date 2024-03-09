import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
} from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
};
export const userReducer = (state = initialState, action) => {
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
      };
    default:
      return state;
  }
};

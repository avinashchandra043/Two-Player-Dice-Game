import { CHANGE_CD, CHANGE_PSD, initialState } from "./myAction";
export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PSD:
      return { ...state, playerStoredData: action.payload };
    case CHANGE_CD:
      return { ...state, currentData: action.payload };
    default:
      return state;
  }
};

export const initialState = {
  playerStoredData: [],
  currentData: ["Player", "", "", 0],
};
export const CHANGE_PSD = "CHANGE_PSD";
export const CHANGE_CD = "CHANGE_CD";

export const changePSD = (arr) => {
  return {
    type: CHANGE_PSD,
    payload: arr,
  };
};
export const changeCD = (arr) => {
  initialState.playerStoredData[arr[3]] = arr;
  changePSD(initialState.playerStoredData);
  // console.log(initialState.playerStoredData);
  return {
    type: CHANGE_CD,
    payload: arr,
  };
};

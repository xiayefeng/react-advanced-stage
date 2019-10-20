import * as types from "../action/types";

const initialState = "点我！点我！点我！";

export default (state = initialState, action = {}) => {
  const { type, data } = action;
  switch (type) {
    case types.UPDATE_TITLE:
      return data;
    default:
      return state;
  }
};

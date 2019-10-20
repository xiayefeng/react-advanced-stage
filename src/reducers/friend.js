import * as types from "../action/types";

const initialState = {
  list: [
    {
      name: "ryan",
      age: 30,
      sex: "man"
    },
    {
      name: "xiaohua",
      age: 28,
      sex: "girl"
    }
  ]
};

export default (state = initialState, action = {}) => {
  const { type, data } = action;
  switch (type) {
    case types.ADD_FRIEND:
      let list = state.list;
      list.push(data);
      return Object.assign({}, state, { list: [...list] });
    case types.DEL_FRIEND:
      let list2 = state.list;
      list2.splice(data, 1);
      return Object.assign({}, state, { list: [...list2] });
    default:
      return state;
  }
};

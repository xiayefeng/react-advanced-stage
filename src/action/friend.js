import { store } from "../store";
import * as types from "./types";

export function addFriend(data) {
  const dispatch = store.dispatch;
  dispatch({ type: types.ADD_FRIEND, data });
}

export function delFriend(idx) {
  const dispatch = store.dispatch;
  dispatch({ type: types.DEL_FRIEND, idx });
}

import { store } from "../store";
import * as types from "./types";

export function updateTitle(data) {
  const dispatch = store.dispatch;
  dispatch({ type: types.UPDATE_TITLE, data });
}

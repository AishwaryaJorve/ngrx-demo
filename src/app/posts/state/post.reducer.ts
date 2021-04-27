import { createReducer } from "@ngrx/store";
import { initialState } from "../state/post.state";

const _postsReducer = createReducer(initialState);

export function PostReducer(state, action) {
  return _postsReducer(state, action);
}

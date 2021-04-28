import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/post.state";
import { addPost } from "./post.action";

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    //Get post from action
    let post = { ...action.post };

    /**
     * To give id to new post .. fetch length of post array from state and add 1 in that
     * length
     * and id is type of string so parse it into toString.
     */
    post.id = (state.post.length + 1).toString();
    return {
      ...state,
      /**
       * as we know state is immutable so should take copy first then add new state in
       * it (using spred oprator that is '...')
       */
      post: [...state.post, post],
    };
  })
);

export function PostReducer(state, action) {
  return _postsReducer(state, action);
}

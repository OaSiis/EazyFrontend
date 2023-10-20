import { IPost, TPostError } from "../types/post.type";
import { arrayToObject } from "../utils/array-to-object.utils";
import { ActionTypes } from "../actions/post.action";

export interface IPostState {
    posts: Record<string, IPost>;
    errors?: TPostError;
}

export const initialState: IPostState = {
    posts: {},
}

const reducer = (state: IPostState, action: ActionTypes): IPostState => {
    switch (action.type) {
        case 'post/get-all':
            return {
                ...state,
                posts: arrayToObject(action.payload, "id")
            };
        case 'post/create':
            return {
                ...state,
                errors: undefined,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload,
                }
            }
        case 'post/update':
            return {
                ...state,
                errors: undefined,
                posts: {
                    ...state.posts,
                    [action.payload.id]: action.payload
                }
            }
        case 'post/delete':
            const { [action.payload]: __, ...rest } = state.posts;

            return { posts: {...rest } }
        case 'post/set-error':
            return {
                ...state,
                errors: action.payload

            }
        default:
            throw new Error();
    }

}

export default reducer;

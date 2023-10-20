import {useEffect, useReducer} from "react";
import reducer, {initialState} from "../../reducers/post.reducer";
import {Outlet} from "react-router-dom";
import PostApi from "../../api/post.api";

const PostsContainer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        (async () => {
            const response = await PostApi.getAll();

            if (response) {
                dispatch({ type: 'post/get-all', payload: response.data });
            }

        })();
    }, []);

    return (
        <Outlet context={{ state, dispatch }} />
    )
}

export default PostsContainer;

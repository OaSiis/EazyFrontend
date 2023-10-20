import React, { Dispatch } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import PostFormComponent from "../../components/post-form.component";
import { IPostData } from "../../types/post.type";
import PostApi from "../../api/post.api";
import { IPostState } from "../../reducers/post.reducer";
import {ActionTypes} from "../../actions/post.action";
import HeadingComponent from "../../components/heading.component";
import Routes from "../../router/routes";

const PostsNewComponent = () => {
    const { state, dispatch } = useOutletContext<{ state: IPostState, dispatch: Dispatch<ActionTypes>}>();

    const navigate = useNavigate();

    const handleCreate = async (data: IPostData) => {
        await PostApi.create(data)
            .then((response) => {
                dispatch({ type: 'post/create', payload: response.data })
            })
            .then(() => navigate(Routes.POSTS_INDEX_PATH))
            .catch(error => {
                dispatch({ type: 'post/set-error', payload: error.response.data })
            })
    }

    return (
        <div className="row">
            <HeadingComponent title="New post" />
            <PostFormComponent errors={state.errors} handleSubmit={handleCreate} />
        </div>
    )
}

export default PostsNewComponent;
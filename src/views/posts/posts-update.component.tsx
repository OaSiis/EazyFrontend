import {IPostData} from "../../types/post.type";
import PostApi from "../../api/post.api";
import Routes from "../../router/routes";
import {useNavigate, useOutletContext, useParams} from "react-router-dom";
import {IPostState} from "../../reducers/post.reducer";
import React, {Dispatch} from "react";
import {ActionTypes} from "../../actions/post.action";
import HeadingComponent from "../../components/heading.component";
import PostFormComponent from "../../components/post-form.component";

const PostsUpdateComponent = () => {
    const { state, dispatch } = useOutletContext<{ state: IPostState, dispatch: Dispatch<ActionTypes>}>();

    const { id } = useParams();

    const navigate = useNavigate();

    if (!id || !state.posts[id]) return null;

    const handleUpdate = async (data: IPostData) => {
        await PostApi.update(data)
            .then((response) => {
                dispatch({ type: 'post/update', payload: response.data })
            })
            .then(() => navigate(Routes.POSTS_INDEX_PATH))
            .catch(error => {
                dispatch({ type: 'post/set-error', payload: error.response.data })
            })
    }

    return (
        <div className="row">
            <HeadingComponent title={`Update : ${state.posts[id].title}`} />
            <PostFormComponent
                defaultValues={state.posts[id]}
                errors={state.errors}
                handleSubmit={handleUpdate}
            />
        </div>
    )
}

export default PostsUpdateComponent;

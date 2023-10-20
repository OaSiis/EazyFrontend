import React, { Dispatch } from "react";
import {Link, useOutletContext} from "react-router-dom";
import PostApi from "../../api/post.api";
import { ActionTypes } from "../../actions/post.action";
import { IPostState } from "../../reducers/post.reducer";
import PostTableComponent from "../../components/post-table.component";
import Routes from "../../router/routes";
import HeadingComponent from "../../components/heading.component";

const PostsIndexComponent = () => {
    const { state, dispatch } = useOutletContext<{ state: IPostState, dispatch: Dispatch<ActionTypes>}>();

    const handleDelete = async (id: number) => {
        await PostApi.remove(id)
            .then(() => {
                dispatch({ type: 'post/delete', payload: id })
            });
    }

    return (
        <>
            <HeadingComponent title="Posts">
                <Link to={Routes.POSTS_NEW_PATH} className="btn btn-success">New</Link>
            </HeadingComponent>
            <PostTableComponent posts={Object.values(state.posts)} handleDelete={handleDelete} />
        </>
    )
}

export default PostsIndexComponent;

import { useOutletContext, useParams } from "react-router-dom";
import { IPostState } from "../../reducers/post.reducer";

const PostsShowComponent = () => {
    const { state} = useOutletContext<{ state: IPostState }>();
    let { id } = useParams();

    if (!id) return null;

    const current = state.posts[id];

    return (
        <p>{ current.title }</p>
    )
}

export default PostsShowComponent;

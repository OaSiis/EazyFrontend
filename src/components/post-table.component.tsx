import React from "react";
import { generatePath, Link } from "react-router-dom";
import { IPost } from "../types/post.type";
import Routes from "../router/routes";

interface IPostTableComponentProps {
    posts: IPost[],
    handleDelete: (id: number) => void;
}

const PostTableComponent = ({ posts, handleDelete }: IPostTableComponentProps) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">CreatedAt</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((post) =>
                    <tr key={`post_${post.id}`}>
                        <th scope="row">{ post.id }</th>
                        <td>{ post.title }</td>
                        <td>{ post.content }</td>
                        <td>@mdo</td>
                        <td className="d-flex gap-3">
                            <Link to={generatePath(Routes.POSTS_SHOW_PATH, { id: `${post.id}` })} className="btn btn-info btn-sm">
                                Show
                            </Link>

                            <Link to={generatePath(Routes.POSTS_UPDATE_PATH, { id: `${post.id}` })} className="btn btn-warning btn-sm">
                                Update
                            </Link>

                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(post.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default PostTableComponent;

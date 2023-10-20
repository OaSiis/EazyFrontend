import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'dotenv/config'
import HeaderComponent from "./components/header.component";
import NavComponent from "./components/nav.component";

import Routes from "./router/routes";

import PostsContainer from "./views/posts/posts.container";
import PostsIndexComponent from "./views/posts/posts-index.component";
import PostsNewComponent from "./views/posts/posts-new.component";
import PostsShowComponent from "./views/posts/posts-show.component";
import PostsUpdateComponent from "./views/posts/posts-update.component";

import './styles/main.scss';


function App() {
    const router = createBrowserRouter([
        {
            path: Routes.POSTS_INDEX_PATH,
            element: <PostsContainer />,
            children: [
                {
                    path: Routes.POSTS_INDEX_PATH,
                    element: <PostsIndexComponent />
                },
                {
                    path: Routes.POSTS_NEW_PATH,
                    element: <PostsNewComponent />
                },
                {
                    path: Routes.POSTS_SHOW_PATH,
                    element: <PostsShowComponent />
                },
                {
                    path: Routes.POSTS_UPDATE_PATH,
                    element: <PostsUpdateComponent />
                }
            ]
        },
    ]);

    return (
        <>
            <HeaderComponent />
            <div className="container-fluid">
                <div className="row">
                    <NavComponent />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <RouterProvider router={router} />
                    </main>
                </div>
            </div>

        </>
    );
}

export default App;

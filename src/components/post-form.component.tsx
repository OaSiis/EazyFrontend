import {FormEvent, useCallback, useEffect, useRef} from "react";
import {IPost, IPostData, TPostError} from "../types/post.type";

interface IPostFormComponentProps {
    defaultValues?: IPost;
    errors?: TPostError;
    handleSubmit: (data: IPostData) => void;
}

const PostFormComponent = ({ defaultValues, errors, handleSubmit }: IPostFormComponentProps) => {
    const titleInputElement = useRef<HTMLInputElement>(null);
    const contentTextAreaElement = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(defaultValues) {
            if (titleInputElement.current) {
                titleInputElement.current.value = defaultValues.title;
            }

            if (contentTextAreaElement.current) {
                contentTextAreaElement.current.value = defaultValues.content;
            }
        }
    }, [defaultValues]);

    const formHandler = useCallback(
        () => async (event: FormEvent) => {
            event.preventDefault();

            const data = {
                title: titleInputElement.current?.value ?? "",
                content: contentTextAreaElement.current?.value ?? ""
            }

            handleSubmit(data);
        }, []
    );

    return (
        <form onSubmit={formHandler()}>
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input
                    ref={titleInputElement}
                    id="title"
                    type="text"
                    className="form-control"
                />
                {
                    errors?.title && (
                        <div className="alert alert-danger mt-2">
                            { errors.title }
                        </div>
                    )
                }
            </div>

            <div className="form-group mb-2">
                <label htmlFor="content">Content</label>
                <textarea
                    ref={contentTextAreaElement}
                    id="content"
                    className="form-control"
                />
                {
                    errors?.content  && (
                        <div className="alert alert-danger mt-2">
                            { errors.content }
                        </div>
                    )
                }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default PostFormComponent;

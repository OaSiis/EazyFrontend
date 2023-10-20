export interface IPost {
    id: number;
    title: string;
    slug: string;
    content: string;
}

export interface IPostData {
    title: string;
    content: string;
}

export type TPostError = Record<keyof IPost, string>
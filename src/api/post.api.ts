import axios from 'axios';
import { IPost, IPostData } from "../types/post.type";

const API_URL = process.env.API_URL;

const getAll = async () => {
    return await axios.get<IPost[]>(`${API_URL}/posts`);
}

const get = async (id: number) => {
    return await axios.get<IPost>(`${API_URL}/posts/${id}`, );
}

const create = async (data: IPostData)=> {
    return await axios.post<IPost>(`${API_URL}/posts`, data)
}

const update = async (data: IPostData) => {
    return await axios.put<IPost>(`${API_URL}/posts`, data)
}

const remove = async (id: number) => {
    return await axios.delete(`${API_URL}/posts/${id}`);
}

const fn = {
    getAll,
    get,
    create,
    update,
    remove
}

export default fn;

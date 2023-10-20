import { IAction } from "../types/reducer.type";
import { IPost, TPostError } from "../types/post.type";

interface IGetAllAction extends IAction {
    type: 'post/get-all'
    payload: IPost[]
}

interface ICreateAction extends IAction {
    type: 'post/create',
    payload: IPost
}

interface IUpdateAction extends IAction {
    type: 'post/update',
    payload: IPost
}

interface IDeleteAction extends  IAction {
    type: 'post/delete',
    payload: number
}

interface ISetErrorAction extends IAction {
    type: 'post/set-error',
    payload: TPostError
}

export type ActionTypes =
    IGetAllAction |
    ICreateAction |
    IUpdateAction |
    IDeleteAction |
    ISetErrorAction
;
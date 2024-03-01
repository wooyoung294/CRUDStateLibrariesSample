import {TodoItem} from "../api/todo";
import {AxiosError} from "axios";

export type InitialState = {
    posts: TodoItem[] | null,
    loading: boolean,
    error: AxiosError | null,
}
export interface InitialAction extends InitialState {
    getTodoList: ()=> void
    createTodoItem: (todoItem:TodoItem)=> void
    updateTodoItem: (todoItem:TodoItem)=> void
    deleteTodoItem: (num:number)=> void
}
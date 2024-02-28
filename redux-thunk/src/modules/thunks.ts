import {Dispatch} from "redux";
import {createTodoItemAsync, deleteTodoItemAsync, getTodoListAsync, updateTodoItemAsync} from "./actions";
import {createTodoItem, deleteTodoItem, getTodoList, TodoItem, updateTodoItem} from "../api/todo";

export function getTodoListThunk(){
    return async (dispatch: Dispatch) =>{
        const {request, success, failure} = getTodoListAsync;
        dispatch(request());
        try {
            const todoList = await getTodoList()
            dispatch(success(todoList))
        }catch (e:any) {
            dispatch(failure(e));
        }
    }
}

export function createTodoItemThunk(todoItem:TodoItem){
    return async (dispatch: Dispatch) =>{
        const {request, success, failure} = createTodoItemAsync;
        dispatch(request());
        try {
            const todoList = await createTodoItem(todoItem)
            dispatch(success(todoList))
        }catch (e:any) {
            dispatch(failure(e));
        }
    }
}

export function updateTodoItemThunk(todoItem:TodoItem){
    return async (dispatch: Dispatch) =>{
        const {request, success, failure} = updateTodoItemAsync;
        dispatch(request());
        try {
            const todoList = await updateTodoItem(todoItem)
            dispatch(success(todoList))
        }catch (e:any) {
            dispatch(failure(e));
        }
    }
}

export function deleteTodoItemThunk(num:number){
    return async (dispatch: Dispatch) =>{
        const {request, success, failure} = deleteTodoItemAsync;
        dispatch(request());
        try {
            const todoList = await deleteTodoItem(num)
            dispatch(success(todoList))
        }catch (e:any) {
            dispatch(failure(e));
        }
    }
}
import {createAsyncAction} from "typesafe-actions";
import {TodoItem} from "../api/todo";
import {AxiosError} from "axios";

export const GET_TODO_LIST = 'todo/GET_TODO_LIST'
export const GET_TODO_LIST_SUCCESS = 'todo/GET_TODO_LIST_SUCCESS'
export const GET_TODO_LIST_ERROR = 'todo/GET_TODO_LIST_ERROR'

export const getTodoListAsync = createAsyncAction(
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_ERROR
)<undefined,TodoItem[],AxiosError>();

export const CREATE_TODO_ITEM = 'todo/CREATE_TODO_ITEM'
export const CREATE_TODO_ITEM_SUCCESS = 'todo/CREATE_TODO_ITEM_SUCCESS'
export const CREATE_TODO_ITEM_ERROR = 'todo/CREATE_TODO_ITEM_ERROR'

export const createTodoItemAsync = createAsyncAction(
    CREATE_TODO_ITEM,
    CREATE_TODO_ITEM_SUCCESS,
    CREATE_TODO_ITEM_ERROR
)<undefined,TodoItem[],AxiosError>();


export const UPDATE_TODO_ITEM = 'todo/UPDATE_TODO_ITEM'
export const UPDATE_TODO_ITEM_SUCCESS = 'todo/UPDATE_TODO_ITEM_SUCCESS'
export const UPDATE_TODO_ITEM_ERROR = 'todo/UPDATE_TODO_ITEM_ERROR'

export const updateTodoItemAsync = createAsyncAction(
    UPDATE_TODO_ITEM,
    UPDATE_TODO_ITEM_SUCCESS,
    UPDATE_TODO_ITEM_ERROR
)<undefined,TodoItem[],AxiosError>();

export const DELETE_TODO_ITEM = 'todo/DELETE_TODO_ITEM'
export const DELETE_TODO_ITEM_SUCCESS = 'todo/DELETE_TODO_ITEM_SUCCESS'
export const DELETE_TODO_ITEM_ERROR = 'todo/DELETE_TODO_ITEM_ERROR'

export const deleteTodoItemAsync = createAsyncAction(
    DELETE_TODO_ITEM,
    DELETE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM_ERROR
)<undefined,TodoItem[],AxiosError>();
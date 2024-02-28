import {TodoAction, TodoState} from "./types";
import {createReducer} from "typesafe-actions";
import {
    CREATE_TODO_ITEM,
    CREATE_TODO_ITEM_ERROR,
    CREATE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM,
    DELETE_TODO_ITEM_ERROR,
    DELETE_TODO_ITEM_SUCCESS,
    GET_TODO_LIST,
    GET_TODO_LIST_ERROR,
    GET_TODO_LIST_SUCCESS,
    UPDATE_TODO_ITEM,
    UPDATE_TODO_ITEM_ERROR,
    UPDATE_TODO_ITEM_SUCCESS
} from "./actions";

const initState: TodoState ={
    listState:{
        loading:false,
        data: null,
        error: null
    }
}

export const todoList = createReducer<TodoState,TodoAction>(initState,{
    [GET_TODO_LIST]: (state) =>({
        ...state,
        listState: {
            loading: true,
            data:null,
            error: null
        }
    }),
    [GET_TODO_LIST_SUCCESS]:(state,action) => ({
        ...state,
        listState: {
            loading: false,
            data:action.payload,
            error: null
        }
    }),
    [GET_TODO_LIST_ERROR]:(state, action) => ({
        ...state,
        listState: {
            loading: false,
            data:null,
            error: action.payload
        }
    }),
    [CREATE_TODO_ITEM]:  (state) =>({
        ...state,
        listState: {
            loading: true,
            data:null,
            error: null
        }
    }),
    [CREATE_TODO_ITEM_SUCCESS]:(state,action) => ({
        ...state,
        listState: {
            loading: false,
            data:action.payload,
            error: null
        }
    }),
    [CREATE_TODO_ITEM_ERROR]:(state, action) => ({
        ...state,
        listState: {
            loading: false,
            data:null,
            error: action.payload
        }
    }),
    [UPDATE_TODO_ITEM]:  (state) =>({
        ...state,
        listState: {
            loading: true,
            data:null,
            error: null
        }
    }),
    [UPDATE_TODO_ITEM_SUCCESS]:(state,action) => ({
        ...state,
        listState: {
            loading: false,
            data:action.payload,
            error: null
        }
    }),
    [UPDATE_TODO_ITEM_ERROR]:(state, action) => ({
        ...state,
        listState: {
            loading: false,
            data:null,
            error: action.payload
        }
    }),
    [DELETE_TODO_ITEM]:  (state) =>({
        ...state,
        listState: {
            loading: true,
            data:null,
            error: null
        }
    }),
    [DELETE_TODO_ITEM_SUCCESS]:(state,action) => ({
        ...state,
        listState: {
            loading: false,
            data:action.payload,
            error: null
        }
    }),
    [DELETE_TODO_ITEM_ERROR]:(state, action) => ({
        ...state,
        listState: {
            loading: false,
            data:null,
            error: action.payload
        }
    })

})
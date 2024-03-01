import {create} from "zustand";
import {InitialAction, InitialState} from './types'
import {createTodoItem, deleteTodoItem, getTodoList, TodoItem, updateTodoItem} from "../api/todo";

const initialState: InitialState = {
    posts: null,
    loading: false,
    error: null,

}

export const useTodoApi = create<InitialAction>(set => {
    return {
        ...initialState,
        getTodoList: async () =>{
            set({ ...initialState, loading: true })
            try {
                const data = await getTodoList();
                set({ ...initialState, posts: data })
            } catch (error:any) {
                set({ ...initialState, error: error })
            }
        },
        createTodoItem: async (todoItem:TodoItem) =>{
            set({ ...initialState, loading: true })
            try {
                const data = await createTodoItem(todoItem);
                set({ ...initialState, posts: data })
            } catch (error:any) {
                set({ ...initialState, error: error.message })
            }
        },
        updateTodoItem: async (todoItem:TodoItem) =>{
            set({ ...initialState, loading: true })
            try {
                const data = await updateTodoItem(todoItem);
                set({ ...initialState, posts: data })
            } catch (error:any) {
                set({ ...initialState, error: error.message })
            }
        },
        deleteTodoItem: async (num:number) =>{
            set({ ...initialState, loading: true })
            try {
                const data = await deleteTodoItem(num);
                set({ ...initialState, posts: data })
            } catch (error:any) {
                set({ ...initialState, error: error.message })
            }
        },
    }
})


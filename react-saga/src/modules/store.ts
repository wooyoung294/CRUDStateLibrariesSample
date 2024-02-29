import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {todoList} from "./reducer";

const rootReducer = combineReducers({
    todoList
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;

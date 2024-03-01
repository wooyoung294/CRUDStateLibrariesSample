import * as actions from './actions'
import {ActionType} from "typesafe-actions";
import {TodoItem} from "../api/todo";

export type TodoAction = ActionType<typeof actions>

export type TodoState ={
    listState:{
        loading:boolean,
        data:TodoItem[] | null,
        error: Error | null
    }
}
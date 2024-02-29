import {combineReducers} from "redux";
import {todoList} from "./reducer";
import {all} from 'redux-saga/effects'
import {todoSaga} from "./sagas";

const rootReducer = combineReducers({
    todoList
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga(){
    yield all([todoSaga()])
}
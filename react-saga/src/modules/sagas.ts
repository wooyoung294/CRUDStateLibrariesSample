import {
    CREATE_TODO_ITEM,
    createTodoItemAsync, DELETE_TODO_ITEM, deleteTodoItemAsync,
    GET_TODO_LIST,
    getTodoListAsync,
    UPDATE_TODO_ITEM,
    updateTodoItemAsync
} from "./actions";
import {createTodoItem, deleteTodoItem, getTodoList, TodoItem, updateTodoItem} from "../api/todo";
import {call,put,takeEvery} from 'redux-saga/effects'

function* getTodoListSaga() {
    try {
        const list:TodoItem[] = yield call(getTodoList)
        yield put(getTodoListAsync.success(list))
    }catch (e:any) {
        yield put(getTodoListAsync.failure(e))
    }
}

function* createTodoItemSaga(action:ReturnType<typeof createTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(createTodoItem,action.payload)
        yield put(createTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(createTodoItemAsync.failure(e))
    }
}

function* updateTodoItemSaga(action:ReturnType<typeof updateTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(updateTodoItem,action.payload)
        yield put(updateTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(updateTodoItemAsync.failure(e))
    }
}

function* deleteTodoItemSaga(action:ReturnType<typeof deleteTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(deleteTodoItem,action.payload)
        yield put(deleteTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(deleteTodoItemAsync.failure(e))
    }
}

export function* todoSaga(){
    yield takeEvery(GET_TODO_LIST,getTodoListSaga)
    yield takeEvery(CREATE_TODO_ITEM,createTodoItemSaga)
    yield takeEvery(UPDATE_TODO_ITEM,updateTodoItemSaga)
    yield takeEvery(DELETE_TODO_ITEM,deleteTodoItemSaga)
}
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
import createAsyncSaga from "../lib/createAsnycSaga";

function* unUsedUtilityGetTodoListSaga() {
    try {
        const list:TodoItem[] = yield call(getTodoList)
        yield put(getTodoListAsync.success(list))
    }catch (e:any) {
        yield put(getTodoListAsync.failure(e))
    }
}

function* unUsedUtilityCreateTodoItemSaga(action:ReturnType<typeof createTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(createTodoItem,action.payload)
        yield put(createTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(createTodoItemAsync.failure(e))
    }
}

function* unUsedUtilityUpdateTodoItemSaga(action:ReturnType<typeof updateTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(updateTodoItem,action.payload)
        yield put(updateTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(updateTodoItemAsync.failure(e))
    }
}

function* unUsedUtilityDeleteTodoItemSaga(action:ReturnType<typeof deleteTodoItemAsync.request>) {
    try {
        const list:TodoItem[] = yield call(deleteTodoItem,action.payload)
        yield put(deleteTodoItemAsync.success(list))
    }catch (e:any) {
        yield put(deleteTodoItemAsync.failure(e))
    }
}

const sagas = [
    { action: GET_TODO_LIST, saga: createAsyncSaga(getTodoListAsync, getTodoList) },
    { action: CREATE_TODO_ITEM, saga: createAsyncSaga(createTodoItemAsync, createTodoItem) },
    { action: UPDATE_TODO_ITEM, saga: createAsyncSaga(updateTodoItemAsync, updateTodoItem) },
    { action: DELETE_TODO_ITEM, saga: createAsyncSaga(deleteTodoItemAsync, deleteTodoItem) },
];
export function* todoSaga(){
    for (const { action, saga } of sagas) {
        yield takeEvery(action, saga);
    }
}
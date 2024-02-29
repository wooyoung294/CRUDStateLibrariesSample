import React, {useEffect, useState} from 'react';
import TodoCard from "../component/TodoCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules/store";
import {TodoItem} from "../api/todo";
import {Button} from "react-bootstrap";
import AddTodoModal from "../component/AddTodoModal";
import {createTodoItemAsync, deleteTodoItemAsync, getTodoListAsync, updateTodoItemAsync} from "../modules";

function TodoCardContainer() {

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const {loading, data, error} = useSelector(
        (state: RootState) => state.todoList.listState
    )
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoListAsync.request());
    }, [])

    const createTodoItem = (todoItem: TodoItem) => {
        dispatch(createTodoItemAsync.request(todoItem));
        handleClose();
    }
    const updateTodoItemStatus = (todoItem: TodoItem) => {
        dispatch(updateTodoItemAsync.request(todoItem));
    }
    const deleteTodoItemStatus = (num: number) => {
        dispatch(deleteTodoItemAsync.request(num));
    }

    return (
        <>
            <Button variant={"primary"} onClick={handleOpen}>추가</Button>
            <div className="scroll">
                {loading && <p style={{textAlign: 'center'}}>로딩중.</p>}
                {error && <p style={{textAlign: 'center'}}>에러!</p>}
                {
                    data && data.map((todoItem) =>
                        <TodoCard todoItem={todoItem}
                                  onChange={updateTodoItemStatus}
                                  onRemove={deleteTodoItemStatus}
                                  key={todoItem.num}/>)
                }
            </div>
            <AddTodoModal show={show} handleClose={handleClose} onCreate={createTodoItem}/>
        </>
    );
}

export default TodoCardContainer;
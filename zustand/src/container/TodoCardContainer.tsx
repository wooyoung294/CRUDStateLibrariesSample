import React, {useEffect, useState} from 'react';
import TodoCard from "../component/TodoCard";
import {TodoItem} from "../api/todo";
import {Button} from "react-bootstrap";
import AddTodoModal from "../component/AddTodoModal";
import {useTodoApi} from "../modules/zustands";

function TodoCardContainer() {

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const { posts:data, loading, error, getTodoList,createTodoItem,updateTodoItem,deleteTodoItem } = useTodoApi()
    useEffect(() => {
        getTodoList();
    }, [])

    const makeCreateTodoItem = (todoItem: TodoItem) => {
        createTodoItem(todoItem)
        handleClose();
    }
    const updateTodoItemStatus = (todoItem: TodoItem) => {
        updateTodoItem(todoItem)
    }
    const deleteTodoItemStatus = (num: number) => {
        deleteTodoItem(num)
    }
    if(error)
        return <div>{error.message}</div>
    return (
        <>
            <Button variant={"primary"} onClick={handleOpen}>추가</Button>
            <div className="scroll">
                {loading && <p style={{textAlign: 'center'}}>로딩중.</p>}
                {error && <div style={{textAlign: 'center'}}>에러!</div>}
                {
                    data && data.map((todoItem) =>
                        <TodoCard todoItem={todoItem}
                                  onChange={updateTodoItemStatus}
                                  onRemove={deleteTodoItemStatus}
                                  key={todoItem.num}/>)
                }
            </div>
            <AddTodoModal show={show} handleClose={handleClose} onCreate={makeCreateTodoItem}/>
        </>
    );
}

export default TodoCardContainer;
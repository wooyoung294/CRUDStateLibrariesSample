import React, {useState} from 'react';
import TodoCard from "../component/TodoCard";
import {createTodoItem, deleteTodoItem, getTodoList, TodoItem, updateTodoItem} from "../api/todo";
import {Button} from "react-bootstrap";
import AddTodoModal from "../component/AddTodoModal";
import {AxiosError} from "axios";
import { useQuery,useMutation, useQueryClient } from 'react-query';
function TodoCardContainer() {

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const {isLoading,data,isError,error,} = useQuery<TodoItem[],AxiosError>('queryGetTodoList',getTodoList)
    const onSuccess = (data:TodoItem[])=>{queryClient.setQueryData('queryGetTodoList', data);}

    const queryClient = useQueryClient();
    const { mutate:mutateUpdateTodoItem } = useMutation(updateTodoItem, {onSuccess});
    const { mutate:mutateCreateTodoItem } = useMutation(createTodoItem, {onSuccess});
    const { mutate:mutateDeleteTodoItem } = useMutation(deleteTodoItem, {onSuccess});

    const createTodoItemStatus = (todoItem: TodoItem) => {
        mutateCreateTodoItem(todoItem)
        handleClose();
    }
    const updateTodoItemStatus = (todoItem: TodoItem) => {
        mutateUpdateTodoItem(todoItem);
    }
    const deleteTodoItemStatus = (num: number) => {
        mutateDeleteTodoItem(num)
    }
    if (isLoading){
        return <h2>로딩중</h2>;
    }
    if (isError) {
        return <h2>{error?.message}</h2>;
    }
    return (
        <>
            <Button variant={"primary"} onClick={handleOpen}>추가</Button>
            <div className="scroll">

                {
                    data && data.map((todoItem) =>
                        <TodoCard todoItem={todoItem}
                                  onChange={updateTodoItemStatus}
                                  onRemove={deleteTodoItemStatus}
                                  key={todoItem.num}/>)
                }
            </div>
            <AddTodoModal show={show} handleClose={handleClose} onCreate={createTodoItemStatus}/>
        </>
    );
}

export default TodoCardContainer;
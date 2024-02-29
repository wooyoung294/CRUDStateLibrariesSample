import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {TodoItem} from "../api/todo";

type AddTodoModalProps = {
    show: boolean,
    handleClose: () => void
    onCreate:(todoItem:TodoItem) => void

}

function AddTodoModal({show, handleClose,onCreate}: AddTodoModalProps) {
    const [todoItem,setTodoItem] = useState<TodoItem>({
        num:0,
        title:'',
        content:'',
        status:'대기중',
        date:''
    });
    useEffect(()=>{
        return(
            setTodoItem({
                num:0,
                title:'',
                content:'',
                status:'대기중',
                date:''
            })
        )
    },[])
    const onChange=(e:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement> )=>{
        const {name, value} = e.target;
        setTodoItem((prevTodoItem)=>({
            ...prevTodoItem,
            [name]:value
        }))
    }
    const {title,content,date} = todoItem;
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <input className="form-control me-2"
                           type="text"
                           name={'title'}
                           placeholder="제목을 입력하세요."
                           style={{border: "none"}}
                           value={title}
                           onChange={onChange}
                    />
                    <input className="form-control" name={'date'} type="date" value={date} onChange={onChange}/>
                </Modal.Header>
                <Modal.Body>
                    <textarea className="addModal-text"
                              name={'content'}
                              placeholder="내용을 입력하세요."
                              rows={10}
                              value={content}
                              onChange={onChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>취소</Button>
                    <Button variant="primary" onClick={()=>onCreate(todoItem)}>저장</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTodoModal;
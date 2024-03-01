import React, {useEffect, useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {TodoItem} from "../api/todo";

type initActiveObj = {
    text: string,
    num: number
}
type StatusDropDownProps ={
    todoItem:TodoItem,
    onChange:(todoItem:TodoItem)=>void
}
function StatusDropDown({todoItem,onChange}:StatusDropDownProps) {
    const {status} = todoItem;
    useEffect(()=>{
        if(status === '대기중'){
            setActiveObj({
                text: status,
                num: 1
            })
        }
        else if(status === '진행중'){
            setActiveObj({
                text: status,
                num: 2
            })
        }
        else if(status === '완료'){
            setActiveObj({
                text: status,
                num: 3
            })
        }
    },[status])
    const [activeObj, setActiveObj] = useState<initActiveObj>({
        text: '',
        num: 1
    })
    const {text, num} = activeObj
    const onChangeStatus = (text: string, num: number) => {
        setActiveObj({
            text: text,
            num: num
        })
        onChange({...todoItem,status:text});
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant={num === 1 ? "secondary" : num === 2 ? 'warning' : "primary"} id="dropdown-basic">
                {text}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#" active={num === 1} onClick={() => onChangeStatus('대기중', 1)}>대기중</Dropdown.Item>
                <Dropdown.Item href="#" active={num === 2} onClick={() => onChangeStatus('진행중', 2)}>진행중</Dropdown.Item>
                <Dropdown.Item href="#" active={num === 3} onClick={() => onChangeStatus('완료', 3)}>완료</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default StatusDropDown;
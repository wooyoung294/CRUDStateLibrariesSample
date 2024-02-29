import React from 'react';
import StatusDropDown from "./StatusDropDown";
import {TodoItem} from "../api/todo";

type TodoCardProps={
    todoItem:TodoItem
    onChange:(todoItem:TodoItem)=>void
    onRemove:(num:number)=>void
}
function TodoCard({todoItem,onChange,onRemove}:TodoCardProps) {
    const {num,title} = todoItem;

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-check">
                    <div className="displayFlex_AlignCenter">
                        <StatusDropDown onChange={onChange} todoItem={todoItem}/>
                        <span className={"flexGrow2 m-1"}>{title}</span>
                        <div className="gap-1">
                            <button type="button" className="btn btn-danger deleteBtn" onClick={()=>onRemove(num)}>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TodoCard;
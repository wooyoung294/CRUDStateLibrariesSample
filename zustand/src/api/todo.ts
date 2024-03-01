import axios from "axios";

export async function getTodoList() {
    const response = await axios.get<TodoItem[]>(
        `http://localhost:8181/getTodoList`
    );
    return response.data;
}

export async function createTodoItem(item:TodoItem) {
    const response = await axios.post<TodoItem[]>(
        `http://localhost:8181/createTodo`,
        item,
        {
            headers:{"Content-Type":"application/json"}
        }
    );
    return response.data;
}

export async function updateTodoItem(item:TodoItem) {
    const response = await axios.patch<TodoItem[]>(
        `http://localhost:8181/updateTodo`,
        item,
        {
            headers:{"Content-Type":"application/json"}
        }
    );
    return response.data;
}

export async function deleteTodoItem(num:number) {
    const response = await axios.delete<TodoItem[]>(
        `http://localhost:8181/deleteTodo?num=${num}`
    );
    return response.data;
}
export interface TodoItem {
    content: string;
    date:    string;
    num:     number;
    status:  string;
    title:   string;
}

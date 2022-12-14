import { todoActionTypes } from "redux/actions/ActionTypes";
import { ActionTypes, Todos } from "redux/types/todo/types";


// todo取得
export const getTodoAction = (todos: Todos) : ActionTypes => {
    return {
        type: todoActionTypes.getTodo,
        payload: todos
    }
}

// todo登録
export const addTodoAction = (addTodo: Todos) : ActionTypes => {
    return {
        type: todoActionTypes.addTodo,
        payload: addTodo
    }
}

// todo更新
// export const updateTodo = (id: number, value: string) : ActionTypes => {
//     return {
//         type: todoActionTypes.updateTodo,
//         id: id,
//         todo: value,
//     }
// }

// todo削除
export const deleteTodoAction = (deleteTodoId: number) : ActionTypes => {
    return {
        type: todoActionTypes.deleteTodo,
        payload: deleteTodoId
    }
}
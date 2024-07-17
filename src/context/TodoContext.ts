import { createContext } from "react"
import { listOfTodos, Todo, TodoId } from "../types/types"

export interface TodoContextType{
    todos: listOfTodos;
    handleRemoveTodo: ({ id} : TodoId) => void;
    handleCompletedTodo: ({ id, completed} : Pick<Todo, 'id' | 'completed'>) => void
}

const defaultState: TodoContextType = {
    todos: [],
    handleRemoveTodo: () => {},
    handleCompletedTodo: () => {}
}


export const TodoContext = createContext<TodoContextType>(defaultState)

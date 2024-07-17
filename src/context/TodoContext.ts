import { createContext } from "react"
import { TodoContextType } from "../types/types"



const defaultState: TodoContextType = {
    todos: [],
    handleRemoveTodo: () => {},
    handleCompletedTodo: () => {}
}


export const TodoContext = createContext<TodoContextType>(defaultState)

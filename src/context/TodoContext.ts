import { createContext } from "react"
import { TodoContextType } from "../types/types"
import { TODO_FILTERS } from "../constants"



const defaultState: TodoContextType = {
    todos: [],
    handleRemoveTodo: () => {},
    handleCompletedTodo: () => {},
    filterSelected: TODO_FILTERS.ALL,
    activeCount: 0,
    completedCount: 0,
    handleFilterChange:() => {},
    handleRemoveAllCompleted: () => {}
}


export const TodoContext = createContext<TodoContextType>(defaultState)

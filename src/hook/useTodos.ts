import { useContext } from "react"
import { TodoContext, TodoContextType } from "../context/TodoContext"


export function useTodos():TodoContextType {
    const context = useContext(TodoContext)
    
  return context
}

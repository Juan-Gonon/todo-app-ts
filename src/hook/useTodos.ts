import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoContextType } from "../types/types"


export function useTodos():TodoContextType {
    const context = useContext(TodoContext)
    
  return context
}

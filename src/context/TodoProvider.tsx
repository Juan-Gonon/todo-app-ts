import React, { ReactNode, useState } from 'react'
import { TodoContext } from './TodoContext'
import { listTodos } from '../mocks/listTodos'
import { Todo as TodoType, TodoId } from '../types/types'

interface Props{
    children: ReactNode
}


export const TodoProvider:React.FC<Props> = ({ children }) => {

    const [todos, setTodos] = useState(listTodos)

    const handleRemoveTodo = ({ id }: TodoId):void => {
      const newTodos = todos.filter((todo) => todo.id !== id)
  
      setTodos(newTodos)
    }
  
    const handleCompletedTodo = (
      { id, completed }: Pick<TodoType, 'id' | 'completed' >
    ):void => {
  
      const newTodos = todos.map((todo) => {
        if(todo.id === id){
          return {
            ...todo,
            completed
          }
        }
  
        return todo
      })
  
      setTodos(newTodos)
    }
  

    
  return (
    <TodoContext.Provider value={{
        todos,
        handleRemoveTodo,
        handleCompletedTodo
    }}>
        {
            children
        }
    </TodoContext.Provider>
  )
}

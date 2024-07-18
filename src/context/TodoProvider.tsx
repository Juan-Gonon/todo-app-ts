import React, { ReactNode, useState } from 'react'
import { TodoContext } from './TodoContext'
import { listTodos } from '../mocks/listTodos'
import { Todo as TodoType, TodoId, FILTER_VALUE } from '../types/types'
import { TODO_FILTERS } from '../constants'

interface Props{
    children: ReactNode
}


export const TodoProvider:React.FC<Props> = ({ children }) => {

  const [filterSelected, setFilterSelected] = useState<FILTER_VALUE>(TODO_FILTERS.ALL)
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


    const activeCount = todos.filter((todo) => !todo.completed ).length
    const completedCount = todos.filter((todo) => todo.completed ).length

    const handleFilterChange = (key: FILTER_VALUE):void => {
      setFilterSelected(key)
    }

    const filterTodos = todos.filter((todo) => {
      if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
      if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed

      return todo
    })

    const handleRemoveAllCompleted = () => {
      const newTodos = todos.filter((todo) => !todo.completed)

      setTodos(newTodos)
    }
  

    
  return (
    <TodoContext.Provider value={{
        todos: filterTodos,
        handleRemoveTodo,
        handleCompletedTodo,
        filterSelected,
        activeCount,
        completedCount,
        handleFilterChange,
        handleRemoveAllCompleted
    }}>
        {
            children
        }
    </TodoContext.Provider>
  )
}

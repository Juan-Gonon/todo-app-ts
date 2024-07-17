import React, { useState } from 'react'
import { useTodos } from '../hook/useTodos'
import { FooterSelected } from './FooterSelected'
import { FILTER_VALUE } from '../types/types'
import { TODO_FILTERS } from '../constants'


export const Footer:React.FC = () => {
    const { todos } = useTodos()
    const [filterSelected, setFilterSelected] = useState<FILTER_VALUE>(TODO_FILTERS.ALL)

    const activeCount = todos.filter((todo) => !todo.completed ).length
    const completedCount = todos.filter((todo) => todo.completed ).length

    const handleFilterChange = (key: FILTER_VALUE):void => {
      setFilterSelected(key)
      
    }

  return (
    <footer className="footer">
        <span className="todo-content">
            <strong>{activeCount}</strong> tareas pendientes
            <br />
        </span>
        <FooterSelected filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
        {
          completedCount > 0 && <button className='clear-completed'>Borrar completados </button>
        }
    </footer>
  )
}

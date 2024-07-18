import React from 'react'
import { useTodos } from '../hook/useTodos'
import { FooterSelected } from './FooterSelected'



export const Footer:React.FC = () => {

  const { activeCount, filterSelected, handleFilterChange, completedCount, handleRemoveAllCompleted } = useTodos()
  

  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes
        </span>
        <FooterSelected filterSelected={filterSelected} handleFilterChange={handleFilterChange} />
        {
          completedCount > 0 && (
          <button 
            className='clear-completed'
            onClick={handleRemoveAllCompleted}
          >Borrar completados </button>
        )
        }
    </footer>
  )
}

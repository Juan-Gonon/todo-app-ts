import React from 'react'
import { useTodos } from '../hook/useTodos'
import { FooterSelected } from './FooterSelected'



export const Footer:React.FC = () => {

  const { activeCount, filterSelected, handleFilterChange, completedCount } = useTodos()
  

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

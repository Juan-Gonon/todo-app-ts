import React from 'react'
import { useTodos } from '../hook/useTodos'


export const Footer:React.FC = () => {
    const { todos } = useTodos()

    const activeCount = todos.filter((todo) => !todo.completed ).length
    const completedCount = todos.filter((todo) => todo.completed ).length

  return (
    <footer className="footer">
        <span className="todo-content">
            <strong>{activeCount}</strong>
            <strong>{completedCount}</strong>
        </span>
    </footer>
  )
}

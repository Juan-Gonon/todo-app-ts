import React from "react";
import { Todo } from "./Todo";
import { useTodos } from "../hook/useTodos";


export const Todos = ():React.JSX.Element => {
    const { todos } = useTodos()
  return (
    <>
    <ul className="todo-list">
        {
            todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`} >
                    <Todo {...todo}  
                    />
                </li>
            ))
        }
    </ul>
    </>
  )
}

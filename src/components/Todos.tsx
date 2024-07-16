import React from "react";
import type { listOfTodos } from "../types/types";
import { Todo } from "./Todo";
interface Props{
    todos: listOfTodos
}

export const Todos:React.FC<Props> = ({ todos } : Props) => {
  return (
    <>
    <ul className="todo-list">
        {
            todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`} >
                    <Todo {...todo} />
                </li>
            ))
        }
    </ul>
    </>
  )
}

import React from "react";
import type { listOfTodos } from "../types/types";
import { Todo } from "./Todo";
interface Props{
    todos: listOfTodos,
    clickRemoveTodo(id:string) : void
}

export const Todos:React.FC<Props> = ({ todos, clickRemoveTodo } : Props) => {
  return (
    <>
    <ul className="todo-list">
        {
            todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`} >
                    <Todo {...todo}  onClickRemove={clickRemoveTodo} />
                </li>
            ))
        }
    </ul>
    </>
  )
}

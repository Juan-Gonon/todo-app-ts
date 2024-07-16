import React from "react";
import type { listOfTodos } from "../types/types";
interface Props{
    todos: listOfTodos
}

export const Todos:React.FC<Props> = ({ todos } : Props) => {
  return (
    <>
    <ul>
        {
            todos.map((todo) => (
                <li key={todo.id} >
                    {
                        todo.text
                    }

                </li>
            ))
        }
    </ul>
    </>
  )
}

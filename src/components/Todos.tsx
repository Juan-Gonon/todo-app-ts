import React from "react";
import type { listOfTodos, TodoId } from "../types/types";
import { Todo } from "./Todo";
import { Todo as TodoType } from "../types/types";
interface Props{
    todos: listOfTodos,
    clickRemoveTodo({ id }: TodoId) : void,
    onToggleCompleted({id, completed}: Pick<TodoType, 'id' | 'completed'>): void
}

export const Todos:React.FC<Props> = ({ todos, clickRemoveTodo, onToggleCompleted } : Props) => {
  return (
    <>
    <ul className="todo-list">
        {
            todos.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'completed': ''}`} >
                    <Todo {...todo}  
                        onClickRemove={clickRemoveTodo} 
                        onToggleCompleted={onToggleCompleted} 
                    />
                </li>
            ))
        }
    </ul>
    </>
  )
}

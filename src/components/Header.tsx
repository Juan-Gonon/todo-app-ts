import React from "react"
import { CreateTodo } from "./CreateTodo"

export const Header:React.FC = () => {
  return (
   <header className="header">
    <h1>Todo App</h1>
    <CreateTodo />
   </header>
  )
}

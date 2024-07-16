import React,{ useState } from "react"
import { Todos } from "./components/Todos"
import { listTodos } from "./mocks/listTodos"
import { TodoId } from "./types/types"


function App():React.JSX.Element{
  const [todos, setTodos] = useState(listTodos)

  const handleRemoveTodo = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id)

    setTodos(newTodos)
  }



  return (
    <>
    <h1>Todo App</h1>
    <Todos todos={todos} clickRemoveTodo={handleRemoveTodo} />
    </>
  )
}

export default App

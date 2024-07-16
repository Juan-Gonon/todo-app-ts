import React,{ useState } from "react"
import { Todos } from "./components/Todos"
import { listTodos } from "./mocks/listTodos"


function App():React.JSX.Element{
  const [todos, setTodos] = useState(listTodos)



  return (
    <>
    <h1>Todo App</h1>
    <Todos todos={todos} />
    </>
  )
}

export default App

import React from "react"
import { Todos } from "./components/Todos"
import { Footer } from "./components/Footer"


function App():React.JSX.Element{
 


  return (
    <>
    <h1>Todo App</h1>
    <Todos />
    <Footer />
    </>
  )
}

export default App

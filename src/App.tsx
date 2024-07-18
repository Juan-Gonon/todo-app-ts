import React from "react"
import { Todos } from "./components/Todos"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


function App():React.JSX.Element{
 


  return (
    <>
    <Header />
    <Todos />
    <Footer />
    </>
  )
}

export default App

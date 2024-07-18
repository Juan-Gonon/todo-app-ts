import React from "react"
import { Todos } from "./components/Todos"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"


function App():React.JSX.Element{
 


  return (
    <main className="app">
    <Header />
    <Todos />
    <Footer />
    </main>
  )
}

export default App

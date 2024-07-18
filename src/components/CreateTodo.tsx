import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useTodos } from '../hook/useTodos'

export const CreateTodo:React.FC = () => {

    const [inputValue, setInputValue] = useState('')
    const { handleAddTodo } = useTodos()

    const handleChangeTodo = (e : ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setInputValue(text)
    }

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const text = inputValue
        handleAddTodo({ text})
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmitForm} >
        <input 
        type="text" 
        className="new-todo"
        value={inputValue}
        placeholder='agregar nota'
        autoFocus
        onChange={handleChangeTodo}
        />
    </form>
  )
}

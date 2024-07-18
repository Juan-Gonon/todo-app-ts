import React from 'react'
import { Todo as TodoType } from '../types/types'
import { useTodos } from '../hook/useTodos'

interface Props extends TodoType{}

export const Todo:React.FC<Props> = ({ id, completed, text } : Props) => {

  const { handleCompletedTodo, handleRemoveTodo } = useTodos()

    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>):void => {

      handleCompletedTodo({ id, completed: e.target.checked})
    }

  return (
    <div className="view">
        <input type="checkbox" id={id} checked={completed} className='toggle' onChange={handleChangeChecked} />
        <label htmlFor={id}>{text}</label>
        <button className="destroy" onClick={() => handleRemoveTodo({ id })} />
    </div>
  )
}

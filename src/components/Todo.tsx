import React from 'react'
import { TodoId, Todo as TodoType } from '../types/types'

interface Props extends TodoType{
    onClickRemove({id}: TodoId): void
}

export const Todo:React.FC<Props> = ({ id, completed, text, onClickRemove } : Props) => {
  return (
    <div className="view">
        <input type="checkbox" id={id} checked={completed} className='toggle' />
        <label htmlFor={id}>{text}</label>
        <button className="destroy" onClick={() => onClickRemove({ id })} />
    </div>
  )
}

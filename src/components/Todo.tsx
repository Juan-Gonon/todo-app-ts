import React from 'react'
import { Todo as TodoType } from '../types/types'

type Props = TodoType

export const Todo:React.FC<Props> = ({ id, completed, text } : Props) => {
  return (
    <div className="view">
        <input type="checkbox" id={id} checked={completed} className='toggle' />
        <label htmlFor={id}>{text}</label>
        <button className="destroy" />
    </div>
  )
}

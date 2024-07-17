import React from 'react'
import { TodoId, Todo as TodoType } from '../types/types'

interface Props extends TodoType{
    onClickRemove({id}: TodoId): void,
    onToggleCompleted({ id, completed}: Pick<TodoType, 'id' | 'completed'>): void
}

export const Todo:React.FC<Props> = ({ id, completed, text, onClickRemove, onToggleCompleted } : Props) => {

    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>):void => {

        onToggleCompleted({ id, completed: e.target.checked})
    }

  return (
    <div className="view">
        <input type="checkbox" id={id} checked={completed} className='toggle' onChange={handleChangeChecked} />
        <label htmlFor={id}>{text}</label>
        <button className="destroy" onClick={() => onClickRemove({ id })} />
    </div>
  )
}

import React from 'react'
import { FILTERS_BUTTONS } from '../constants'
import { FILTER_VALUE } from '../types/types'

interface Props{
  filterSelected: FILTER_VALUE;
  handleFilterChange: (key: FILTER_VALUE) => void
}

export const FooterSelected:React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return(
            <li key={key}>
              <a href={href} 
              className={className}
              onClick={(e) => {
                e.preventDefault()
                handleFilterChange(key as FILTER_VALUE)
              }}
              >{literal}</a>
            </li>
          )
        })
      }

    </ul>
  )
}

import React from 'react'
import movies from './movie.json'

export const ProjextUptoProps = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>Year: {props.year}</p>
    </div>
  )
}

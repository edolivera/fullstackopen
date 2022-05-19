import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
        <p>
            {props.part1} {props.exercises1}
        </p>
    </div>
  )
}

export default Header

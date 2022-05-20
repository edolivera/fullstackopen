import React from 'react'

const Total = (props) => {
//console.log(props);
  return (
    <div>
        <p>Number of exercises {props.parts.part1.exercises + props.parts.part2.exercises + props.parts.part3.exercises }</p>
    </div>
  )
}

export default Total

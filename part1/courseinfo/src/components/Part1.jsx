import React from 'react'

const Part1 = (props) => {
 
  return (
    <div>
        <p>
          {props.part1.name+" "+props.part1.exercises}
        </p>
    </div>
  )
}

export default Part1

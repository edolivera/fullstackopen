import React from 'react'

const Total = (props) => {
  return (
    <div>
        <p>
            {props.part3} {props.exercises3}
        </p>
        <p>Number of exercises {props.total}</p>
    </div>
  )
}

export default Total

import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

const Content = (props) => {

  return (
    <div>
      <Part1 part1={props.parts[0]}  />
      <Part2 part2={props.parts[1]} />
      <Part3 part3={props.parts[2]} />
    </div>
  )
}

export default Content

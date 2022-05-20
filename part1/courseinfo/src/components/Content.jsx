import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

const Content = (props) => {

  return (
    <div>
      <Part1 part1={props.parts.part1}  />
      <Part2 part2={props.parts.part2} />
      <Part3 part3={props.parts.part3} />
    </div>
  )
}

export default Content

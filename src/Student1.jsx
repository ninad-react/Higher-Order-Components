import React, { useState } from 'react'
import HigherOrderComponent from './HOC'

const Student1 = (props) => {

  return (
    <div>
        Student1
        <h3>{props.num}</h3>
        <button onClick={() => props.handleEvent()}>Count Increase</button>
    </div>
  )
}

export default HigherOrderComponent(Student1);
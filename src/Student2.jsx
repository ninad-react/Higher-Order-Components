import React from 'react'
import HigherOrderComponent from './HOC';

const Student2 = (props) => {

  return (
    <div>Student2
        <h3>{props.num}</h3>
        <button onClick={props.handleEvent}>Count Increase</button>
    </div>
  )
}

export default HigherOrderComponent(Student2);
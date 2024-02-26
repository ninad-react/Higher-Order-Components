import React, { useState } from 'react'

const HigherOrderComponent = (Student) => {

    const Highordercomminer = () => {
        const [num, setNum] = useState(0); 

        const handleEvent = () => {
            setNum(num + 10);
        }

        return (
            <Student num={num} handleEvent={handleEvent}/>
        )
    }

  return Highordercomminer;
}

export default HigherOrderComponent;
import React from "react"
import Greeting from '../components/Greeting'

const SayHello = () => {
   
    return (
      <div>
        <Greeting name="Megan" age='20' />
        <Greeting name="Obinna" age='30'/>
        <Greeting name="Generosa" age='40'/>
      </div>
    )
  }

  export default SayHello
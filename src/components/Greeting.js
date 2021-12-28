import React from "react"

const Greeting = (props) => {
    console.log(props)

    return (
      <p>Hi {props.name}! {props.age}</p>
      
    )
  }

  export default Greeting
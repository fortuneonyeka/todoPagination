import React from 'react'

const PlainFunctions = () => {

  // foo()
  // foo1()

  function foo() {
    console.log("I am funtion declaration, i can be assesed everywhere(hoisted)");
  }

  const foo1 = () => {
    console.log("I am a function expression and i cant be acesses before initialization");
  }
  return (
    <div>

    </div>
  )
}

export default PlainFunctions
import React from 'react'
// using generator function to return multpile values
const GetMutipleValues = () => {

  function* GetMutipleValues () {
    yield 10
    yield 20
  }
const result = GetMutipleValues()
console.log(result.next().value);
console.log(result.next().value);


  return (
    <div></div>
  )
}

export default GetMutipleValues
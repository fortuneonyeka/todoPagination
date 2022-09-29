import React from 'react'

const ObjectToArrays = () => {
  const person = {
    name: "Fortune",
    age: 30
  }
   
  

  // Expected result =  
  // ['name', 'Fortune']
  //  ['age', 30]

  const result = Object.entries(person)
  // console.log(result);

  // OR

  const objectToArrays = (obj) => {
    const objkeys = Object.keys(obj)
    const result  = objkeys.map((keys) => {
      const values = obj[keys]
      return [keys, values]
    })
    return result
  }

  const res = objectToArrays(person)
  console.log(res);





  const arrayToObject = ["mango", "Orange", "Banana","Apples"]
  const objectResult = Object.assign({}, arrayToObject)
  // console.log(objectResult);

  // expected result 
  //  {0: 'mango', 1: 'Orange', 2: 'Banana', 3: 'Apples'}

  // OR

  const obj3 = {}
  arrayToObject.map((element, index) => {
    obj3["key" + index] = element
  })

  // console.log(obj3);

  // Expected result:
  // {key0: 'mango', key1: 'Orange', key2: 'Banana', key3: 'Apples'}

  return (
    <div>

    </div>
  )
}

export default ObjectToArrays
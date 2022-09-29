import React from 'react'


const DangerousInnerHtml = () => {
 const data = "<h1 style=color:blue>some really useful information</h1>"
  return (
    <div dangerouslySetInnerHTML={{__html:data}}/>
  )
}

export default DangerousInnerHtml
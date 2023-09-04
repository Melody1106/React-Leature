import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h1>Parent -to import child</h1>
      <Child text="今天開始學" price={100} hasNum={true} />
    </>
  )
}

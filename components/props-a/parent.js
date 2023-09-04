import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      {/* PropTypes */}
      <Child text="{100}" price="abc" hasNum="Hello" />

      <h1>Parent -to import child</h1>
      <Child text="今天開始學" price={100} hasNum={true} />
    </>
  )
}

import React, { useState } from 'react'
import ChildA from './child'
export default function Parent() {
  const [pData, setData] = useState('parent data')
  return (
    <>
      <h1>Parent</h1>
      <ChildA pData={pData} />
    </>
  )
}

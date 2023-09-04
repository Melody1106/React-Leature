import React, { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')
  const [dataFromChild, setDataFromChild] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>來自child-b的資料:{dataFromChild}</p>
      <ChildA dataFromChild={dataFromChild} />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}

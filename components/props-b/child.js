import React from 'react'

export default function ChildA({ pData }) {
  return (
    <>
      <h1>childA</h1>
      <p>來自父母元件的資料: {pData}</p>
    </>
  )
}

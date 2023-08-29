import React from 'react'

export default function JsxC() {
  const aa = ['a ', 'b', 'hello']
  // const ab = aa.map((v, i) => {
  //   return <li key={i}>{v}</li>
  // })

  // console.log(ab)

  return (
    <>
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}

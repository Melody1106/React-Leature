import React from 'react'

export default function JsxA() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <h2>Number</h2>
      {123}
      <br></br>
      {1 + 1}
      <br></br>
      {NaN}
      <h2>String</h2>
      {'hello'}
      <br></br>
      {`total=${100 - 1}`}
      <h2>Boolean</h2>
      {true}
      {false}
      {/* boolean不會被渲染 呈現 */}
      <h2>null/undefined</h2>
      {null}
      {undefined}
      {/* null,undefined不會被渲染 呈現 */}
      <h2>陣列-Array</h2>
      {/* 類似於 array.join("") */}
      {[1, 2, 3]}
      {['a', 'b', 'Hello']}
      <h2>物件-Object</h2>
      {/* 物件不能直接渲染，會造成錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>函式-Function</h2>
      {/* 物件不能直接渲染，會造成錯誤 並非ReactNode(React Child)*/}
      {() => {}}
    </>
  )
}

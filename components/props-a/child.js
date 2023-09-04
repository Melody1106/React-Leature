import React from 'react'

// export default function Child(props) {
//   console.log(props) //{ text: '今天開始學', price: 100, hasNum: true }
//   return (
//     <>
//       <h1>child</h1>
//       <p>text: {props.text}</p>
//       <p>price: {props.price}</p>
//       <p>hasNum: {props.hasNum ? 'true' : 'false'}</p>
//     </>
//   )
// }

//函式傳入預設值，函式傳入值解構
export default function Child({ text, price, hasNum }) {
  return (
    <>
      <h1>child</h1>
      <p>text: {text}</p>
      <p>price: {price}</p>
      <p>hasNum: {hasNum ? 'true' : 'false'}</p>
    </>
  )
}

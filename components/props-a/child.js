import React from 'react'
import PropTypes from 'prop-types'

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
//PropTypes 類別(class) Fields(欄位/成員)
Child.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  hasNum: PropTypes.bool.isRequired,
}

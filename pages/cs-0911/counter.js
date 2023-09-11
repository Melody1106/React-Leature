import { useReducer } from 'react'

//1.先決定初始狀態
const initState = { total: 0 }

//2 決定應用的action(動作)有哪些
//action是描述"現在發生了什麼事情的 物件，包含了type(類型)與payload(有效資料，也是物件)
// const increase = { type: 'increase', payload: { value: 1 } }
// const decrease = { type: 'decrease', payload: { value: 1 } }

//3先寫reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { total: state.total + action.payload.value }
    case 'decrease':
      return { total: state.total + action.payload.value }
    default:
      return state
  }
}

export default function Counter() {
  //4宣告state, dispatch
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <h1>計數器(useReducer)</h1>
      <h1>{state.total}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'increase', payload: { value: 1 } })
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrease', payload: { value: -1 } })
        }}
      >
        -1
      </button>
    </>
  )
}

import React, { useState } from 'react'

export default function TodoIndex() {
  //  可控表單元素，宣告一個專門給文字輸入框使用的狀態
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    //每個todo={id:number,text:string}
    { id: 1, text: '買牛奶' },
    { id: 2, text: '學react' },
  ])

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 仿照資料庫id遞增的作法(只限於id是數字)
          if (e.key === 'Enter') {
            const ids = todos.map((v) => v.id)
            // 有資料取最大值+1當新id，沒資料用1開始
            const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1

            const newTodo = { id: newId, text: inputValue }
            // 有資料取最大值+1當新id，沒資料用1開始
            setTodos([newTodo, ...todos])

            setInputValue('')
            // 清空文字輸入框
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}

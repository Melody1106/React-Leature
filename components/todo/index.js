import React, { useState } from 'react'
import styles from './todo.module.css'

export default function TodoIndex() {
  //  可控表單元素，宣告一個專門給文字輸入框使用的狀態
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    //每個todo={id:number,text:string}
    { id: 1, text: '買牛奶', complete: true },
    { id: 2, text: '學react', complete: false },
  ])

  const add = (todos, text) => {
    const ids = todos.map((v) => v.id)
    // 有資料取最大值+1當新id，沒資料用1開始
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1

    const newTodo = { id: newId, text: text, complete: false }
    // 有資料取最大值+1當新id，沒資料用1開始
    return [newTodo, ...todos]
  }

  //刪除
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      //展開城市如果
      if (v.id === id) return { ...v, complete: !v.complete }
      else return { ...v }
    })
    //3
  }

  const handleAdd = (text) => {
    setTodos(add(todos, text))
  }

  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  const handleTogglecompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

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
            handleAdd(e.target.value)

            setInputValue('')
            // 清空文字輸入框
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.complete}
                onChange={(e) => {
                  //真變假 假變真
                  handleTogglecompleted(v.id)
                }}
              />

              <span
                className={v.complete ? styles['completed'] : styles['active']}
              >
                {v.text}
              </span>
              <button
                onClick={() => {
                  handleRemove(v.id)
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

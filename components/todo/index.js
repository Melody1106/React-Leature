import React, { useState } from 'react'
import AddForm from './add-form'
import List from './list'

export default function TodoIndex() {
  //  可控表單元素，宣告一個專門給文字輸入框使用的狀態
  //全選專用狀態
  const [selectAll, setSelectAll] = useState(false)

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

  // 依傳入isSelectedAll(布林值)進行切換所有completed屬性改變
  const toggleSelectedAll = (todos, isSelectedAll = false) => {
    return todos.map((v) => {
      return { ...v, complete: isSelectedAll }
    })
  }

  const handleAdd = (text) => {
    setTodos(add(todos, text))
  }

  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  const handleToggleSelectedAll = (isSelectedAll) => {
    setTodos(toggleSelectedAll(todos, isSelectedAll))
  }
  // -----------------------------------------------

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <br />
      <input
        type="checkbox"
        checked={selectAll}
        onChange={(e) => {
          setSelectAll(e.target.checked)
          handleToggleSelectedAll(e.target.checked)
        }}
      />
      {''}
      全選
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
      {/* <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.complete}
                onChange={(e) => {
                  //真變假 假變真
                  handleToggleCompleted(v.id)
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
      </ul> */}
    </>
  )
}

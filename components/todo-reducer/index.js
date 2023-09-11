import { useReducer, useState } from 'react'
import styles from './todo.module.css'

import AddForm from './add-form'
import List from './list'
// 3. reducer
import { todoReducer } from './reducer'

// 1. 初始狀態
const todosState = [
  {
    id: 1,
    text: '買牛奶',
    completed: true,
    editing: false,
  },
  {
    id: 2,
    text: '學react',
    completed: false,
    editing: false,
  },
]

export default function TodoIndex() {
  // -----------------------------------------------
  // 宣告狀態
  // -----------------------------------------------

  // 過濾類型用的狀態
  // 值只能是三者之一: '所有' | '進行中' | '已完成'
  const [filterType, setFilterType] = useState('所有')
  // 用於呈現按鈕的選項陣列
  const filterOptions = ['所有', '進行中', '已完成']

  // 每個 todo = { id: number, text: string, completed: boolean, editing: boolean }
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '買牛奶',
  //     completed: true,
  //     editing: false,
  //   },
  //   {
  //     id: 2,
  //     text: '學react',
  //     completed: false,
  //     editing: false,
  //   },
  // ])

  const [todos, dispatch] = useReducer(todoReducer, initState)

  // -----------------------------------------------
  // 事件處理函式
  // -----------------------------------------------
  // 第3.步 設定回原本的狀態中
  const handleAdd = (text) => {
    //setTodos(add(todos, text))
    dispatch({ type: 'add', payload: { text } })
  }

  const handleRemove = (id) => {
    // setTodos(remove(todos, id))
    dispatch({ type: 'remove', payload: { id } })
  }

  const handleToggleCompleted = (id) => {
    // setTodos(toggleCompleted(todos, id))
    dispatch({ type: 'toggle-completed', payload: { id } })
  }

  const handleToggleEditing = (id) => {
    dispatch({ type: 'toggle-editing', payload: { id } })
    // setTodos(toggleEditing(todos, id))
  }

  const handleUpdateText = (id, text) => {
    // setTodos(updateText(todos, id, text))
    dispatch({ type: 'update-text', payload: { id, text } })
  }

  const handleToggleSelectedAll = (isSelectedAll) => {
    // setTodos(toggleSelectedAll(todos, isSelectedAll))
    dispatch({ type: 'toggle-selected-all', payload: { isSelectedAll } })
  }
  // -----------------------------------------------

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <br />
      <input
        // 使用不可控表單元素即可
        type="checkbox"
        onChange={(e) => {
          // 切換所有的項目
          handleToggleSelectedAll(e.target.checked)
        }}
      />{' '}
      全選
      <List
        // 列表中呈現的項目，還需先經過類型過濾再呈現，並非原本的狀態
        // todos={filterTodos(todos, filterType)}
        todos={todos}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateText={handleUpdateText}
      />
      <hr />
      {/* 類型選項按鈕 */}
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              filterType === v ? styles['btn-active'] : styles['btn-normal']
            }
            onClick={() => {
              setFilterType(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}

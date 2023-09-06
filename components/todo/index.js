import React, { useState } from 'react'
import styles from './todo.module.css'
import AddForm from './add-form'
import List from './list'

export default function TodoIndex() {
  //  可控表單元素，宣告一個專門給文字輸入框使用的狀態
  //全選專用狀態
   const [selectAll, setSelectAll] = useState(false)
   //過濾類型用狀態
   // 值 只能是三者之一 所有|進行中|已完成
   const [filterType, setFilterType] = useState('All')
   const filterOptions=['All', 'Ing', 'Done']

  const [todos, setTodos] = useState([
    //每個todo={id:number,text:string}
    { id: 1, text: '買牛奶', complete: true },
    { id: 2, text: '學react', complete: false },
  ])

  const filterTodos=(todos,filterType)=>{
    if(filterType === 'Done') return todos.filter((v)=> v.complete === true)
    if(filterType === 'Ing') return todos.filter((v)=> v.complete === false)

    //預設"all"-不過濾
    return todos
  }

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
        // checked={selectAll}
        onChange={(e) => {
          // setSelectAll(e.target.checked)
          handleToggleSelectedAll(e.target.checked)
        }}
      />
      {''}
      全選
      <List
        //todos={todos} //過濾功能 列表呈現項目 需先經過類型過濾再呈現，非原本狀態
        todos={filterTodos(todos,filterType)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
     <hr/>
     {filterOptions.map((v,i)=>{
      return <button key={i} 
      onClick={()=>{
        setFilterType(v)
      }}
       className={
       filterType === v ?  styles['btn-active'] : styles['btn-normal']
        }>{v}</button> 
     })}
    </>
  )
}

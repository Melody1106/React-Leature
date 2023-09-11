import React from 'react'
// import styles from '../todo.module.css'
import Item from './item'
import EditForm from './edit-form'

export default function List({
  todos,
  handleRemove,
  handleToggleCompleted,
  handleToggleEditing,
  handleUpdateText,
}) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, complete, text, editing } = v
          return editing ? (
            <EditForm
              key={id}
              text={text}
              id={id}
              handleUpdateText={handleUpdateText}
            />
          ) : (
            <Item
              key={id}
              id={id}
              complete={complete}
              text={text}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
              handleToggleEditing={handleToggleEditing}
            />
          )
        })}
      </ul>
    </>
  )
}

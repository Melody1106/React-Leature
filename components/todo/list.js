import React from 'react'
import styles from './todo.module.css'
import Item from './item'

export default function List({ todos, handleRemove, handleToggleCompleted }) {
  return (
    <ul>
      {todos.map((v, i) => {
        const { id, complete, text } = v
        return (
          <Item
            key={id}
            id={id}
            complete={complete}
            text={text}
            handleToggleCompleted={handleToggleCompleted}
            handleRemove={handleRemove}
          />
        )
      })}
    </ul>
  )
}

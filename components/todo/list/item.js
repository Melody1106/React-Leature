import React from 'react'
import styles from '../todo.module.css'

export default function Item({
  id,
  complete,
  text,
  handleToggleCompleted,
  handleToggleEditing,
  handleRemove,
}) {
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => {
            //真變假 假變真
            handleToggleCompleted(id)
          }}
        />
        <span className={complete ? styles['completed'] : styles['active']}>
          {text}
        </span>
        <button
          onClick={() => {
            handleToggleEditing(id)
          }}
        >
          編輯
        </button>
        <button
          onClick={() => {
            handleRemove(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}

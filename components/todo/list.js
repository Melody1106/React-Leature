import React from 'react'
import styles from './todo.module.css'

export default function List({ todos, handleRemove, handleToggleCompleted }) {
  return (
    <ul>
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
    </ul>
  )
}

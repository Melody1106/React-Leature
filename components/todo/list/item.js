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
      <li>
        <input
          type="checkbox"
          checked={complete}
          onChange={(e) => {
            // 這裡要作toggle completed狀態的動作
            //真變假 假變真
            handleToggleCompleted(id)
          }}
        />
        <span
          onDoubleClick={() => {
            // 這裡作切換進入編輯狀態的動作
            handleToggleEditing(id)
          }}
          className={complete ? styles['completed'] : styles['active']}
        >
          {text}
        </span>

        <button
          onClick={() => {
            // 這裡作刪除的動作
            handleRemove(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}

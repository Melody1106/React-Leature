import { useState } from 'react'

export default function AddForm({ handleAdd }) {
  const [inputValue, setInputValue] = useState('')

  return (
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
  )
}

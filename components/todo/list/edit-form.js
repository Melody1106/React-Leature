import React, { useState } from 'react'

export default function EditForm({ id, text, handleUpdateText }) {
  const [inputText, setInputText] = useState(text)
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUpdateText(id, inputText)
          }
        }}
      />
      <button>褚存</button>
    </>
  )
}

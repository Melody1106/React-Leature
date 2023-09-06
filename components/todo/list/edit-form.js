import React, { useState } from 'react'

export default function EditForm({ text }) {
  const [inputText, setInputText] = useState(text)
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button>褚存</button>
    </>
  )
}

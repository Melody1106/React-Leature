import React, { useState } from 'react'

export default function AddForm({ text }) {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
    </>
  )
}

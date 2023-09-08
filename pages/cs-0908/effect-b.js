import React, { useState } from 'react'
import Counter from '@/components/effect-b/counter'

export default function EffectB() {
  const [count, setCount] = useState({ total: 1 })
  const [name, setName] = useState('Mark')
  return (
    <>
      <h1>useEffect範例</h1>

      <Counter name={name} count={count} />
      <button
        onClick={() => {
          setCount({ total: count.total + 1 })
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setCount({ total: 10 })
        }}
      >
        =10
      </button>
      <hr />
      <button
        onClick={() => {
          setName('Nike')
        }}
      >
        change to Nike
      </button>

      <button
        onClick={() => {
          setName('Iris')
        }}
      >
        change to Iris
      </button>
    </>
  )
}

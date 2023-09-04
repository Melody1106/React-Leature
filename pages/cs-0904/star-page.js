import { useState } from 'react'
import Star from '@/components/star'

export default function StarPage() {
  const [start, setStart] = useState(3)

  return (
    <>
      <Star startRating={start} />
      <Star startRating={1} />
      <Star startRating={5} />
      <button
        onClick={() => {
          setStart(1)
        }}
      >
        set start = 1
      </button>
      <button
        onClick={() => {
          setStart(5)
        }}
      >
        set start = 5
      </button>
    </>
  )
}

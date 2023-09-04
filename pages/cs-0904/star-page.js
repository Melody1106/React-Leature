import { useState } from 'react'
import Star from '@/components/star'

export default function StarPage() {
  const [value1, setValue1] = useState(3)
  const [value2, setValue2] = useState(5)
  const [value3, setValue3] = useState(1)

  return (
    <>
      <Star startRating={value1} onRatingChaange={setValue1} />
      <Star startRating={value2} onRatingChaange={setValue2} />
      <Star startRating={value3} onRatingChaange={setValue3} />
      
     
    </>
  )
}

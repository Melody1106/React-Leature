// {useState} 定義狀態
import { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  const [rating, setRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {Array(5)
          .fill(1)
          .map((v, i) => {
            const score = i + 1

            return (
              <button
                className={styles['star-btn']}
                key={i}
                onClick={() => {
                  setRating(score)
                }}
              >
                <span
                  className={score <= rating ? styles['on'] : styles['off']}
                >
                  &#9733;
                </span>
              </button>
            )
          })}

        {/* <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span> */}
      </div>
    </>
  )
}

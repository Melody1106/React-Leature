// {useState} 定義狀態
import { useEffect, useState } from 'react'
import styles from './star.module.css'
export default function Star({ startRating = 0, onRatingChange = () => {} }) {
  //click時的評分分數
  //1反樣式: 初始值用傳入props 稱為derived(衍生的)state(狀態)

  const [rating, setRating] = useState(0)
  //mouse enter時的分數
  const [hoverRating, setHoverRating] = useState(0)

  //.2為解決此derived(衍生的)state(狀態)問題:使用useEffect
  useEffect(() => {
    setRating(startRating)
  }, [startRating])
  //相依性陣列，意旨監聽setRating如有更動時，在執行其中代碼一次
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

                  onRatingChange(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
              >
                <span
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
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

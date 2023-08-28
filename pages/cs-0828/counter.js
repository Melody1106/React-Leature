//導入react中使用狀態勾子
import { useState } from 'react'

export default function Counter() {
  //宣告狀態
  // [獲得值的變數, 設定值的函式] = useState(初始值)
  const [total, setTotal] = useState(0)
  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
      role="presentation"
    >
      {total}
    </h1>
  )
}

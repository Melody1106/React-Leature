//導入react中使用狀態勾子
import { useEffect, useState } from 'react'

export default function Counter({ initCount, name }) {
  //宣告狀態
  // [獲得值的變數, 設定值的函式] = useState(初始值)
  const [total, setTotal] = useState(0)

  //當initCount(屬性)有變化時，就會做一次setTotal
  useEffect(() => {
    setTotal(initCount)
  }, [initCount])

  //didMount + didUpdate
  //一開始會執行一次
  useEffect(() => {
    console.log('name 改變了', name)
  }, [name])
  //   useEffect(() => {
  //     console.log('name 改變了', props.name)
  //   }, [props])

  //渲染情形
  console.log('render')

  //即使props是物件，由於effect是與re-render相關才會執行，所以要理解的是react如何進行render
  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <h2>{name}</h2>
    </>
  )
}

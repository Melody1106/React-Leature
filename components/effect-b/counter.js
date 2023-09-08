//導入react中使用狀態勾子
import { useEffect, useState } from 'react'

export default function Counter({ count, name }) {
  //宣告狀態
  // [獲得值的變數, 設定值的函式] = useState(初始值)
  const [total, setTotal] = useState(0)

  //didMount + didUpdate
  //一開始會執行一次
  useEffect(() => {
    console.log('name 改變了', name)
  }, [name])
  //   useEffect(() => {
  //     console.log('name 改變了', props.name)
  //   }, [props])

  useEffect(() => {
    setTotal(count)
    console.log('count 改變了', count)
  }, [count])

  // didMount + didUpdate
  useEffect(() => {
    console.log('count改變了', count.total)
  }, [count])

  // didMount + didUpdate
  useEffect(() => {
    console.log('count.total改變了', count.total)
  }, [count.total])

  //渲染情形
  console.log('render')

  //即使props是物件，由於effect是與re-render相關才會執行，所以要理解的是react如何進行render
  return (
    <>
      <h1>{count.total}</h1>

      <h2>{name}</h2>
    </>
  )
}

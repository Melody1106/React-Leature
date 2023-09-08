import Link from 'next/link'
import { func } from 'prop-types'
import { useState, useEffect } from 'react'

export default function EffectA() {
  const [total, setTotal] = useState(0)
  const [force, setForce] = useState(false)

  //樣式1 每次render都會執行依次()
  useEffect(() => {
    console.log('每次render都會執行這裡')
  })
  // 樣式2.(使用百分比70-80%)  只有第一次"渲染後(After)" 執行一次，之後不會在執行
  //對比之前的類別元件中componentDidMount生命週期方法，但非完全相同
  useEffect(() => {
    console.log('只有第一次"渲染後(After)" 執行一次，之後不在執行')
  }, [])
  //這裡要保持空陣列，這稱為相依性陣列，裡面放置"相依變數們"，空陣列表示不與任何變數相依
  //不與任何變數相依的預設行為模式，第一次"渲染後(After)" 執行一次

  //樣式3.(使用百分比20-30%) didMount + didUpdate
  useEffect(() => {
    console.log(
      '第一次"渲染後(After)" 執行一次 + 每次total有變 都會在"改變後"執行一次'
    )
  }, [total])

  //樣式4:在元件被移除出dom"前"執行一次
  useEffect(() => {
    return () => {
      //對應原本生命週期方法 willUnmount
      //在react中被稱為cleaner(清除函數)
      console.log('在元件被移除出dom"前"執行一次')
    }
  }, [])

  //整合其他js的程式 組合樣式2+4
  useEffect(() => {
    //didMount
    document.getElementById('my-button').addEventListener('click', function () {
      alert('this is my button')
    })
    return () => {
      document
        .getElementById('my-button')
        .addEventListener('click', function () {
          alert('this is my button')
        })
    }
  }, [])

  //console.log('render')

  return (
    <>
      <h1>useEffect 基本範例</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        強制頁面re-render
      </button>
      <br />
      <button id="my-button">不可控按鈕</button>
      <br />
      <Link href="/">Home</Link>
    </>
  )
}

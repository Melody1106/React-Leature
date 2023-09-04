import React, { useEffect, useState } from 'react'

export default function ChildB({ setDataFromChild }) {
  const [cData, setCData] = useState('child-b data')

  //錯誤語法
  //setDataFromChild(cData)

  //下面語法代表，在childB元件，第一次在頁面渲染(render)完成後，執行其中的代碼
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <h1>childB</h1>
      <button
        onClick={() => {
          //觸發事件 利用父母由props傳來的設定函數 回傳給父母
          setDataFromChild(cData)
        }}
      >
        送資料給父母
      </button>
    </>
  )
}

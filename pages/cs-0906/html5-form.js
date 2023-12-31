import React, { useState } from 'react'

export default function Html5Form() {
  const [inputText, setInputText] = useState('')

  //密碼狀態切換
  const [show, setShow] = useState('')

  const [textareaText, setTextAreaText] = useState('')
  const foodOptions = ['三明治', '貝果', '佛卡夏']
  //food的值只會有四者其一 : '三明治', '貝果', '佛卡夏', ''
  const [food, setFood] = useState('')
  //初始值為空白字串代表都沒選中

  const fruitOptions = ['西瓜', '芒果']
  const [fruits, setFruits] = useState(['芒果'])

  //select
  const cityOptions = [
    '台北市',
    '新北市',
    '桃園市',
    '台中市',
    '台南市',
    '高雄市',
  ]

  const [city, setCity] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      <section id="input-text">
        <h2>問字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <h2>密碼輸入框</h2>
        <input
          type={show ? 'show' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? '顯示' : '隱藏'}
        </button>
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>.
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextAreaText(e.target.value)
          }}
        />
      </section>
      <section id="radio-group">
        <h2>選項按鈕群組(radio group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                //用值和目前選中的狀態來比較，決定是否呈現選中的樣子
                checked={food === v}
                value={v}
                onChange={(e) => {
                  setFood(e.target.value)
                  //狀態紀錄的是每個選項傳送的值
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="checkbox-group">
        <h2>核取方塊群組(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={fruits.includes(v)}
                value={v}
                onChange={(e) => {
                  const targetValue = e.target.value

                  // 判斷是否在fruits狀態陣列中
                  if (fruits.includes(targetValue)) {
                    // 如果是 -> 移出陣列
                    // 1 2
                    const newFruits = fruits.filter((v2) => v2 !== targetValue)
                    // 3
                    setFruits(newFruits)
                  } else {
                    // 否則 -> 加入陣列
                    // 1 2 3
                    setFruits([...fruits, targetValue])
                  }
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉清單 select</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          <option value="">--請選擇--</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}

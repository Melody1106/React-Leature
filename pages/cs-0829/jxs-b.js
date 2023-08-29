import React from 'react'
// import styles from '@/styles/jsx-b.module.css'

export default function JsxB() {
  return (
    <>
      {/* style屬性一定要是物件，不然程式會錯誤無法執行 */}
      {/* <div className="card" style="width: 18rem; font-size:20px;"> */}
      {/* 第1種解法: style屬性改物件值 */}
      {/* <div className="card" style={{ width: '18rem', fontSize: '20px' }}> */}
      {/*  第2種解法: css module */}
      {/* <div className={`card ${styles.w18}`}> */}
      {/* 第三種解法: styled-jsx */}
      <div className="card w18">
        <img src="/next.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <style jsx>
        {`
          img {
            border: 1px solid red;
          }
          .w18 {
            width: 18rem;
            font-size: 20px;
          }
        `}
      </style>
    </>
  )
}

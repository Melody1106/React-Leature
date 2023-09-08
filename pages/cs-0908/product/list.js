import { useState, useEffect } from 'react'

//https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function List() {
  const [products, setProducts] = useState([])

  //向伺服器要資料 設定到狀態中
  const getProducts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )
    const data = await res.json()
    console.log(data) //觀察 設定到狀態中
    if (Array.isArray(data)) setProducts(data) // 要到資料 設定狀態
  }

  //didMount 初次渲染"後"
  useEffect(() => {
    //向伺服器要資料 設定到狀態中
    getProducts()
  }, [])
  console.log('render') //觀察渲染情況
  return (
    <>
      <h1>商品列表</h1>
      <ul>
        {/* 以下程式實際上要執行2次，第一次為空值 。第二次才有真正的值*/}
        {products.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

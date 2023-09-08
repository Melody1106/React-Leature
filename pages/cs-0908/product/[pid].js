import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// href={`https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/{pid}
export default function Detail() {
  //1.由router中要獲得動態路由pid(即方跨號中名稱)
  //router.query中會包含pid屬性
  //router.isReady(布林值) true 代表本頁面已完成水和化作用(hydration)，，router.query已經有值可以開始使用
  const router = useRouter()
  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const getProduct = async (pid) => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
        pid
    )
    const data = await res.json()
    console.log(data) //觀察 設定到狀態中
    setProduct(data) // 要到資料 設定狀態
  }

  useEffect(() => {
    if (router.isReady) {
      //確保router.query有值
      const { pid } = router.query
      console.log(pid)
      //
      getProduct(pid)
    }
  }, [router.isReady])

  console.log('render')
  return (
    <>
      <h1>商品詳細頁</h1>
      <p>名稱:{product.name}</p>
      <p>價格:{product.price}</p>
    </>
  )
}

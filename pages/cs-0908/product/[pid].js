import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/loader.module.css'
import Link from 'next/link'

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

  //信號狀態，控制仔入動畫的開關
  const [isLoading, setIsloading] = useState(true)

  const getProduct = async (pid) => {
    try {
      const res = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
          pid
      )

      const data = await res.json()

      console.log(data)
      // 設定到狀態中 -> 會觸發重新渲染(re-render)
      setProduct(data)
    } catch (e) {
      setTimeout(() => {
        setIsloading(false)
      }, 2000)
      alert('伺服器連線失敗')
      console.error(e)
    }
  }

  //等候資料從伺服器獲得後
  useEffect(() => {
    // 如果狀態中已經成功設定到值時，2秒後關閉動畫
    if (product.id) {
      setTimeout(() => {
        setIsloading(false)
      }, 2000)
    }
  }, [product])

  //獲得pid用
  useEffect(() => {
    if (router.isReady) {
      //在一頁面載入不同資料
      //如果載入動畫是關閉，打開它準備載入資料
      if (!isLoading) setIsloading(true)
      //確保router.query有值
      const { pid } = router.query
      console.log(pid)
      //
      getProduct(pid)
    }
  }, [router.isReady, router.query])

  //console.log('render')

  const loader = (
    <div className={styles['lds-heart']}>
      <div></div>
    </div>
  )

  const productDate = (
    <>
      <p>名稱:{product.name}</p>
      <p>價格:{product.price}</p>
    </>
  )

  return (
    <>
      <h1>商品詳細頁</h1>
      <div>{isLoading ? loader : productDate}</div>
      <ul>
        <li>
          <Link href="/cs-0908/product/3">相關商品id=3</Link>
        </li>
        <li>
          <Link href="/cs-0908/product/1">相關商品id=1</Link>
        </li>
      </ul>
    </>
  )
}

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  //純函式 只做狀態改變(1.2)
  //只對對應id的商品count屬性改變
  const updateCount = (products, id, value) => {
    return products.map((v) => {
      //展開城市如果符合(v.id ===id  count: v.cunt+value)
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })
    //3
  }

  const handleIncrement = (id) => {
    setProducts(updateCount(products, id, 1))
  }

  const handleDecrement = (id) => {
    setProducts(updateCount(products, id, -1))
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrement(product.id)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecrement(product.id)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}

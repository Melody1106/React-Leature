import React, { useEffect, useState } from 'react'
import Icon from '@/components/fs-icon/icon'

export default function Test() {
  //元件在客戶端掛載後再渲染 FontAwesome 圖標
  const [isClient, setIsClient] = useState(false)
  // 使用 useEffect 在客户端上挂载后设置 isClient 为 true
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <div>其他内容</div>
      {isClient && <Icon />}
    </>
  )
}

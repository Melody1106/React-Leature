import React from 'react'
import Image from 'next/image'

// 實心圖
import shoppingCart from '@/assets/cart.svg'
import User from '@/assets/user.svg'
import catLogo from '@/assets/catLogo.svg'

export default function IconSvg({ fav, handleToggleFavByIsbn }) {
  return (
    <>
      <Image src={shoppingCart} alt="shoppingCart" />
      <Image src={User} alt="user" />
      <Image src={catLogo} alt="logo" />
    </>
  )
}

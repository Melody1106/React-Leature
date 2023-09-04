import React from 'react'
import Image from 'next/image'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function FavIcon({ fav, handleToggleFavByIsbn }) {
  return (
    <>
      <Image
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
        onClick={handleToggleFavByIsbn}
      />
    </>
  )
}

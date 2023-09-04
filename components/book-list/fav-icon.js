import React from 'react'
import Image from 'next/image'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function FavIcon({ book, handleToggleFav }) {
  return (
    <>
      <Image
        src={book.fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
        onClick={() => {
          handleToggleFav(book.isbn)
        }}
      />
    </>
  )
}

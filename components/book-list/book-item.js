import React from 'react'

import FavIcon from './fav-icon'

export default function bookItem({ book, handleToggleFav }) {
  return (
    <>
      <tr key={book.isbn}>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <FavIcon book={book} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  )
}

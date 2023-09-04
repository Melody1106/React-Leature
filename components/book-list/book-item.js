import React from 'react'

import FavIcon from './fav-icon'

export default function bookItem({
  isbn,
  title,
  author,
  fav,
  handleToggleFav,
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon fav={fav} isbn={isbn} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  )
}

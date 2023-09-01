import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  //先擴充原本書籍的資料，多一個fav屬性(boolean)，在表有/沒有加入收藏
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)
  //1.2
  const toggleFav = (books, isbn) => {
    const newBooks = books.map((v) => {
      //展開城市如果
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return { ...v }
    })
    //3
    setBooks(newBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      toggleFav(books, v.isbn)
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <style jsx>
        {`
          table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            color: #000;
          }

          td,
          th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          tr:hover {
            background-color: #ddd;
          }

          th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04aa6d;
            color: white;
          }
        `}
      </style>
    </>
  )
}

export default BookList

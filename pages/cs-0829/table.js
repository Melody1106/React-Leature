import React from 'react'

import data from '@/data/data/products.json'
//import styles from '@/styles/table.module.css'
console.log(data.products)

export default function ProductTable() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
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

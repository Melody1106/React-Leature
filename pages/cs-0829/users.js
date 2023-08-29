import React from 'react'
import data from '@/data/users.json'

export default function Users() {
  console.log(data.users)
  return (
    <ul>
      {data.users.map((v, i) => {
        return (
          <li key={v.id}>
            {v.name} ({v.email})
          </li>
        )
      })}
    </ul>
  )
}

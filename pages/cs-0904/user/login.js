import { useContext } from 'react'
import { AuthContext } from '@/context/auth'
//在不同頁面之間保持登陸狀態 link元件
import Link from 'next/link'

export default function Login() {
  //解構AuthContext中帶的 auth,setAuth
  const { auth, setAuth } = useContext(AuthContext)
  return (
    <>
      <h1>會員燈入頁</h1>
      <p>目前登入狀態:{auth.isAuth ? '登入中' : '未登入'}</p>
      <button
        onClick={() => {
          setAuth({
            isAuth: true,
            userData: {
              id: 1,
              name: 'Harry',
              username: 'Harry11100',
              email: 'Harry@email.com',
            },
          })
        }}
      >
        登入
      </button>
      <br />
      {/* 要使用Link元件取代<a>才能保持住資料，讓資料不會在重新整理時跳轉 */}
      {/* <a href="/cs-0904/user/profile">資料頁</a> */}
      <br />
      <Link href="/cs-0904/user/profile">資料頁(Link)</Link>
    </>
  )
}

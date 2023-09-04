import { useContext } from 'react'
import { AuthContext } from '@/context/auth'
//在不同頁面之間保持登陸狀態 link元件
import Link from 'next/link'

export default function Profile() {
  //解構auth
  const { auth } = useContext(AuthContext)
  return (
    <>
      <h1>會員資料頁</h1>
      <p>目前登入狀態:{auth.isAuth ? '登入中' : '未登入'}</p>
      <p>會員姓名: {auth.userData.name}</p>
      <p>會員email{auth.userData.email}</p>
      <br />
      <Link href="/cs-0904/user/login">登入頁link</Link>
    </>
  )
}

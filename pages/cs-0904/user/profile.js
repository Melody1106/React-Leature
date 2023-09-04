import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
//在不同頁面之間保持登陸狀態 link元件

export default function Profile() {
  //解構auth
  const { auth } = useAuth()
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

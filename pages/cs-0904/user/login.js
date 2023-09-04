import { useContext } from 'react'
import { AuthContext } from '@/context/auth'

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
    </>
  )
}

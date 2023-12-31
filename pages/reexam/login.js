// import { useContext } from 'react'
// import { AuthContext } from '@/context/auth'
//在不同頁面之間保持登陸狀態 link元件
import { useState } from 'react'
import Link from 'next/link'
// import { useAuth } from '@/hooks/use-auth'

export default function Login() {
  const [user, setUser] = useState({
    account: '',
    password: '',
  })
  //初始的錯誤訊息物件
  //一開始的錯誤訊息要獨立定義，原因是假定使用者每次提交表單
  // 所有錯訊訊息都是空的，換言之，每次提交都要重新檢查所有欄位
  const originErrors = {
    account: '',
    password: '',
  }

  //密碼顯示隱藏
  const [show, setShow] = useState(false)

  //記錄錯誤訊息用狀態
  const [errors, setErrors] = useState(originErrors)

  //解構AuthContext中帶的 auth,setAuth
  const [auth, setAuth] = useState(false)

  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    console.log(fromData.get('account'), fromData.get('password'))

    // 如成功送出 錯誤返回
    let hasErrors = false
    const newErrors = { ...originErrors }

    if (!user.account) {
      // 沒填
      newErrors.account = '請填寫account'
      hasErrors = true
    }
    if (user.password === '') {
      newErrors.password = '請填寫password'
      hasErrors = true
    }

    if (user.account !== 'user123' || user.password !== '123456') {
      newErrors.account = '錯誤account'
      newErrors.password = '錯誤password'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return //return跳出提供函式
    }
    setAuth(true)
  }

  const loginForm = (
    <>
      <h1>會員燈入頁</h1>
      {/* <p>目前登入狀態:{auth.isAuth ? '登入中' : '未登入'}</p> */}
      <form onSubmit={handleSubmit}>
        <label>
          帳號:
          <input
            type="text"
            name="account"
            value={user.account}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <span>{errors.account}</span>

        <br />
        <label>
          密碼:
          <input
            type={show ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
        <input
          type="checkbox"
          onChange={() => {
            setShow(!show)
          }}
        />
        {show ? '隱藏' : '顯示'}
        <br />
        <span>{errors.password}</span>
        <br />
        <button>登入</button>
      </form>
      {/* <Link href="/cs-0904/user/profile">資料頁(Link)</Link> */}
    </>
  )

  const logoutForm = (
    <>
      <button
        onClick={() => {
          setAuth(false)
        }}
      >
        登出
      </button>
    </>
  )
  return <>{auth ? logoutForm : loginForm}</>
}

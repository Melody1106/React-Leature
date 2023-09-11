import { useState } from 'react'

export default function User() {
  // 狀態初始化屬性名稱和欄位名稱一致
  // 會員使用
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  // 錯誤用初始狀態
  const originErrors = {
    username: '',
    password: '',
  }

  const [errors, setErrors] = useState(originErrors)

  // 隱藏or呈現密碼用
  const [show, setShow] = useState(false)

  // 認証通過信號用
  const [isAuth, setIsAuth] = useState(false)

  // 所有欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    // { [e.target.name]: e.target.value}
    //   ^^^^^^^^^^^^^^ 計算得來(計算後)的屬性名稱 (computed property names)
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer
    // 1 2 步
    const newUser = { ...user, [e.target.name]: e.target.value }
    // 第3步
    setUser(newUser)
  }

  const handleSubmit = (e) => {
    // 阻擋(取消)表單預設送出行為
    e.preventDefault()

    // 信號值
    let hasErrors = false
    const newErrors = { ...originErrors }

    if (!user.username) {
      // 沒填
      newErrors.username = '請填寫帳號'
      hasErrors = true
    }

    if (!user.password) {
      newErrors.password = '請填寫密碼'
      hasErrors = true
    }

    // 只有同時帳號、密碼兩個符合才會通過
    if (user.username !== 'user123' || user.password !== '123456') {
      // 沒填
      newErrors.username ||= '帳號密碼錯誤'
      newErrors.password ||= '帳號密碼錯誤'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return // 跳出提供的函式
    }

    // 認証通過
    setIsAuth(true)
  }

  // 登入表單
  const loginForm = (
    <form onSubmit={handleSubmit}>
      <label>
        姓名:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
        />
      </label>
      <div>{errors.username}</div>
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
        checked={show}
        onChange={() => {
          setShow(!show)
        }}
      />
      {show ? '隱藏' : '呈現'}
      <div>{errors.password}</div>
      <br />
      <button>登入</button>
    </form>
  )

  // 登出表單
  const logoutForm = (
    <>
      <button onClick={() => setIsAuth(false)}>登出</button>
    </>
  )

  return (
    <>
      <h1>會員登入表單</h1>
      {isAuth ? logoutForm : loginForm}
    </>
  )
}

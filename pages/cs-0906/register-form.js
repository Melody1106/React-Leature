import { useState } from 'react'

export default function RegisterForm() {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  //所有欄位共用的事件處理函式
  const handlwFieldChande = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    // [e.target.name]
    //計算得來(計算後)的屬性名稱
    //->>> (computed property names)
    setUser(newUser)
  }

  const handleSubmit = (e) => {}

  return (
    <>
      <h1>會員註冊表單</h1>
      {/* onSubmit為表單驗證 標籤 */}
      <form onSubmit={handleSubmit}>
        <label>
          姓名:
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handlwFieldChande}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handlwFieldChande}
          />
        </label>
        <br />
        <label>
          密碼:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handlwFieldChande}
          />
        </label>
        <br />
        <label>
          確認密碼:
          <input
            type="text"
            name="password2"
            value={user.password2}
            onChange={handlwFieldChande}
          />
        </label>
        <br />
        {/* <button>送出</button> */}
      </form>
    </>
  )
}

import { useState } from 'react'

export default function RegisterForm() {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })
  //初始的錯誤訊息物件
  //一開始的錯誤訊息要獨立定義，原因是假定使用者每次提交表單
  // 所有錯訊訊息都是空的，換言之，每次提交都要重新檢查所有欄位
  const originErrors = {
    fullname: '',
    email: '',
    password: '',
    password2: '',
  }
  //記錄錯誤訊息用狀態
  const [errors, setErrors] = useState(originErrors)

  //所有欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    // [e.target.name]
    //計算得來(計算後)的屬性名稱
    //->>> (computed property names)
    setUser(newUser)
  }

  const handleSubmit = (e) => {
    //阻擋(取消) 表單預設送出行為 get方法
    e.preventDefault()
    // 再送出時，對表單個欄位做檢查
    //FromData 另一種檢查方法，可用於"可控"&"不可控"，缺點只在送出時進行檢查
    // input type ="file" 欄位必為不可控元素，要用FromData
    const fromData = new FormData(e.target)
    console.log(
      fromData.get('fullname'),
      fromData.get('email'),
      fromData.getAll('fruits')
    )

    //信號 如成功送出 錯誤返回
    let hasErrors = false
    const newErrors = { ...originErrors }

    // 直接用狀態中的值來檢查
    // if (user.fullname === '') {
    // if (user.fullname.length === 0) {
    // 空字串為falsy
    // if (user.fullname) {
    //   // 有填
    // } else {
    //   // 沒填
    //   newErrors.fullname = '請填寫姓名'
    //   hasErrors = true
    // }
    if (!user.fullname) {
      // 沒填
      newErrors.fullname = '請填寫姓名'
      hasErrors = true
    }
    if (user.email === '') {
      newErrors.email = '請填寫email'
      hasErrors = true
    }

    if (hasErrors) {
      setErrors(newErrors)
      return //return跳出提供函式
    }

    //清空所有錯誤訊息
    setErrors(originErrors)
    //檢查無誤，資料送到伺服器
    alert('檢查無誤，送到伺服器')
  }

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
            onChange={handleFieldChange}
          />
        </label>
        <span>{errors.fullname}</span>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
          />
        </label>
        <span>{errors.email}</span>
        <br />
        <label>
          密碼:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label>
          確認密碼:
          <input
            type="text"
            name="password2"
            value={user.password2}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <button>送出</button>
      </form>
    </>
  )
}

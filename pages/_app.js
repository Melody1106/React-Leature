import '@/styles/globals.css'
import { AuthContext } from '@/context/auth'
import { useState } from 'react'
// 引入context(部分導出)

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const [auth, setAuth] = useState({
    isAuth: false,
    userData: {
      id: 0,
      name: '',
      username: '',
      email: '',
    },
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {getLayout(<Component {...pageProps} />)}
    </AuthContext.Provider>
  )
}

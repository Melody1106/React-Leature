import { createContext, useState, useContext } from 'react'
export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
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
      {children}
      {/* 屬性中的childern */}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

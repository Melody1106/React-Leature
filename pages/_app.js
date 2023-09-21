import '@/styles/globals.css'
// 引入AutoProvider(部分導出)
import { AuthProvider } from '@/hooks/use-auth'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
}

//FONTAWESOME
// App.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

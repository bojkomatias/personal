import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'
import Sidebar from '../components/Layout/Sidebar'

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen max-h-screen overflow-hidden bg-stone-100 invert">
      <div className=" h-full overflow-hidden ">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp

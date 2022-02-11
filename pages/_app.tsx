import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <pre>{JSON.stringify(pageProps, null, 2)}</pre> */}
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

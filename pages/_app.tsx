import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios'
import Sidebar from '../components/Layout/Sidebar'
import { useEffect } from 'react'
import gsap from 'gsap'
import Loader from '../components/Layout/Loader'
import Navbar from '../components/Navbar'
import Head from 'next/head'

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-auto bg-stone-100 invert">
      <Head>
        <title>Matías Bojko</title>
      </Head>
      <Loader />
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

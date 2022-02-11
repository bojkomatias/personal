import Head from 'next/head'
import { FeatureSectionA, FeatureSectionB } from '../components/FeatureSections'
import { HeroSection } from '../components/HeroSection'
import { TrustedBy } from '../components/TrustedBy'

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeatureSectionA />
      <FeatureSectionB />
      <TrustedBy />
    </div>
  )
}

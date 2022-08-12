import { useEffect } from 'react'
import gsap from 'gsap'
import ImageS from '../components/Landing/ImageS'

export default function Home() {
  useEffect(() => {
    gsap.from('#title', {
      opacity: 0,
      y: 50,
      delay: 1.5,
      duration: 0.7,
    })
    gsap.from('#paragraph', {
      opacity: 0,
      y: 20,
      delay: 1.7,
      duration: 1,
    })
  }, [])

  return (
    <div>
      <div
        id="title"
        className="mx-8 mt-10 text-4xl font-bold uppercase text-stone-800 hover:drop-shadow md:mx-24 md:text-6xl"
      >
        Matias bojko
      </div>
      <div
        id="paragraph"
        className=" mx-8 mt-8 max-w-xl text-xl text-stone-600 md:mx-24"
      >
        Hi there!
        <br />
        I'm a systems engineer based in Argentina. I've been developing web
        applications for the better part of 5 years now.
        <br /> I'm always down for a challenge and enjoy bringing forth elegant
        and briliant solutions to any problem that comes to hand.
      </div>
      <ImageS />
    </div>
  )
}

import { useEffect } from 'react'
import gsap from 'gsap'
import ImageS from '../components/Landing/ImageS'
import FloatingArrow from '../components/Layout/FloatingArrow'

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      '#content',
      { opacity: 0, duration: 1 },
      { opacity: 1, duration: 1, delay: 1.5 }
    )
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
    <div className="h-full w-full">
      <FloatingArrow hrefTo={'/contact'} foward={true} />
      <div id="content">
        <div
          id="title"
          className="m-8 mt-20 text-4xl font-bold uppercase text-stone-800 hover:drop-shadow md:m-24 md:text-6xl"
        >
          Matias bojko
        </div>
        <div
          id="paragraph"
          className="m-8 max-w-xl text-xl text-stone-600 md:m-24"
        >
          Hi there!
          <br />
          I'm a systems engineer based in Argentina. I've been developing web
          applications for the better part of 5 years now.
          <br /> I'm always down for a challenge and enjoy bringing forth
          elegant and briliant solutions to any problem that comes to hand.
        </div>
        <ImageS />
      </div>
    </div>
  )
}

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import gsap from 'gsap'

const FloatingArrow = ({ hrefTo, foward }) => {
  useEffect(() => {
    gsap.from('#icon', { width: 0, height: 0, delay: 3, duration: 0.3 })
    gsap.from('.ringo', {
      opacity: 1,
      duration: 1,
      delay: 1,
      position: 'absolute',
      top: '10rem',
      right: '25%',
      width: '50%',
    })
  }, [])

  return (
    <a
      href={hrefTo}
      className={`ringo absolute top-3/4  h-32 w-32 origin-right grayscale transition duration-500 hover:brightness-0 ${
        foward ? 'right-5' : 'left-5'
      }`}
    >
      <img src="/ring.png" alt="" className=" -rotate-12 blur-sm " />{' '}
      <img src="/ring.png" alt="" className="animate-spin" />
      {foward ? (
        <ArrowRightIcon
          id="icon"
          className="absolute top-3/4 right-10 z-40 h-10 w-10 origin-right animate-pulse rounded-full border  hover:animate-none"
        />
      ) : (
        <ArrowLeftIcon
          id="icon"
          className="absolute top-3/4 right-10 z-40 h-10 w-10 origin-right animate-pulse rounded-full border  hover:animate-none"
        />
      )}
    </a>
  )
}

export default FloatingArrow

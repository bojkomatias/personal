import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import gsap from 'gsap'

const Loader = () => {
  useEffect(() => {
    gsap.from('.icon', { width: 0, height: 0, delay: 3, duration: 0.3 })
    gsap.from('.ringo', {
      opacity: 1,
      duration: 1,
      delay: 1,
      position: 'absolute',
      top: '5rem',
      right: '25%',
      width: '50%',
    })
  }, [])

  return (
    <div>
      <img
        src="/ring.png"
        alt=""
        className="ringo pointer-events-none absolute -rotate-12 animate-spin bg-transparent opacity-0 blur-sm grayscale"
      />{' '}
      <img
        src="/ring.png"
        alt=""
        className="ringo pointer-events-none absolute animate-spin bg-transparent opacity-0 grayscale"
      />{' '}
    </div>
  )
}

export default Loader

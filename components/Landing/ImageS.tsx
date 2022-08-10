import Image from 'next/image'
import gsap, { Power3 } from 'gsap'
import { useEffect } from 'react'

const ImageS = () => {
  useEffect(() => {
    gsap.from('img', {
      ease: Power3.easeInOut,
      position: 'absolute',
      left: '0%',
      delay: 2.3,
      duration: 0.9,
    })
  }, [])

  return (
    <div className="relative mx-12 mt-24 invert md:mx-24">
      <img src="/matu.webp" className="photo-hover -rotate-3" />
      <img src="/matu2.webp" className="photo-hover left-[15%] rotate-6" />
      <img
        src="/matu5.webp"
        className="photo-hover hidden -rotate-6 md:left-[30%] md:block"
      />
      <img
        src="/matu4.webp"
        className="photo-hover hidden -rotate-12 md:left-[45%] md:block"
      />
      <img
        src="/matu6.webp"
        className="photo-hover left-[30%] rotate-6 md:left-[60%]"
      />
    </div>
  )
}

export default ImageS

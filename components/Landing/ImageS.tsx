import Image from 'next/image'
import gsap, { Power3 } from 'gsap'
import { useEffect } from 'react'

const ImageS = () => {
  useEffect(() => {
    gsap.from('img', {
      ease: Power3.easeOut,
      position: 'absolute',
      left: '0%',
      delay: 4.3,
      duration: 0.9,
    })
  }, [])

  return (
    <div className="relative mx-32 invert">
      <img src="/matu.webp" className="photo-hover -rotate-3" />
      <img src="/matu2.webp" className="photo-hover left-[15rem] rotate-6" />
      <img src="/matu5.webp" className="photo-hover left-[30rem] -rotate-6 " />
      <img src="/matu4.webp" className="photo-hover left-[45rem] -rotate-12" />
      <img src="/matu6.webp" className="photo-hover left-[60rem] rotate-6" />
    </div>
  )
}

export default ImageS

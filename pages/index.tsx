import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowRightIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { FeatureSectionA, FeatureSectionB } from '../components/FeatureSections'
import gsap from 'gsap'
import Terminal from '../components/Landing/Terminal'
import ImageS from '../components/Landing/ImageS'

export default function Home() {
  useEffect(() => {
    gsap.from('#icon', { width: 0, delay: 3, duration: 0.3 })
    gsap.fromTo(
      '.ringo',
      {
        opacity: 1,
        duration: 1,
        position: 'absolute',
        top: '25%',
        left: '25%',
        width: '50%',
      },
      {
        opacity: 1,
        duration: 1,
        delay: 2,
        position: 'absolute',
        width: '10rem',
        top: '60%',
        left: '85%',
      }
    )
    gsap.fromTo(
      '#content',
      { opacity: 0, duration: 1 },
      { opacity: 1, duration: 1, delay: 3 }
    )
    gsap.from('#title', {
      opacity: 0,
      y: 50,
      delay: 2.5,
      duration: 0.7,
    })
    gsap.from('#paragraph', {
      opacity: 0,
      y: 20,
      delay: 2.7,
      duration: 1,
    })
    gsap.from('#terminal', {
      opacity: 0,
      x: 20,
      delay: 3.4,
      duration: 1,
    })
  }, [])

  return (
    <div className="h-full w-full">
      <a
        href="/projects"
        className="ringo absolute relative z-40 cursor-pointer grayscale hover:brightness-0"
      >
        <img
          src="/ring.png"
          alt=""
          className="absolute top-0 -rotate-12 animate-spin blur-sm"
        />{' '}
        <img
          src="/ring.png"
          alt=""
          className="absolute top-0 z-40 animate-spin"
        />
        <ArrowRightIcon
          id="icon"
          className="absolute top-1/2 left-3/4 z-40 h-10 w-10 -translate-x-16 translate-y-6 animate-pulse hover:animate-none"
        />
      </a>
      <div id="content">
        <div
          id="title"
          className="m-8 text-4xl font-bold uppercase text-stone-800 hover:drop-shadow md:m-24 md:text-6xl"
        >
          Matias bojko
        </div>
        <div id="paragraph" className="m-8 text-xl text-stone-600 md:m-24">
          Hi there!
          <br />
          I'm a systems engineer based in Argentina. I've been developing web
          applications for the better part of 5 years now. I'm always down for a
          challenge and enjoy bringing forth elegant and briliant solutions to
          any problem that comes to hand.
        </div>
        <ImageS />
      </div>
    </div>
  )
}

import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { FeatureSectionA, FeatureSectionB } from '../components/FeatureSections'
import { TrustedBy } from '../components/TrustedBy'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col justify-between">
      <div className="flex w-full flex-col items-center justify-between overflow-hidden leading-10 md:flex-row-reverse">
        <div className="flex-end place-self-end md:place-self-start">
          <img
            src="/pic.webp"
            alt=""
            className="max-h-[20rem] rounded-bl-full sepia-0 transition duration-500 hover:sepia md:max-h-[30rem] "
          />
        </div>
        <div className="my-2 ml-4 mr-3 place-self-start text-6xl font-bold uppercase md:ml-12 md:place-self-center md:text-7xl ">
          Matias
          <div className="text-primary-600">Bojko</div>
        </div>
      </div>

      <div className="relative mx-4 mb-20 rounded-md border-[0.2rem] border-t-[2.1rem] border-black bg-stone-300 p-12 font-mono lowercase md:mx-12">
        <div className="absolute -top-6 left-2 h-3 w-3 rounded-full bg-red-500"></div>
        <div className="absolute -top-6 left-6 h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="absolute -top-6 left-10 h-3 w-3 rounded-full bg-green-500"></div>
        <div className="text-4xl md:text-6xl">
          $ Hi there, I can
          <div className="text-primary-600">
            <Typewriter
              options={{
                strings: ['design', 'develop', 'implement'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>{' '}
          your next web project
        </div>
      </div>
    </main>
  )
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { CubeTransparentIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabaseClient'
import { mapRange } from 'gsap'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [user, setuser] = useState(supabase.auth.user())
  return (
    <div className="ml-8 flex h-16 items-center gap-8 p-4 md:ml-20">
      {links.map((item) => (
        <a
          href={item.href}
          className="text-sm font-bold uppercase -tracking-wider underline-offset-8 transition-all duration-300 hover:text-lg hover:font-thin hover:tracking-wider hover:underline"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

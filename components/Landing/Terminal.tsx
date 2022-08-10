import gsap from 'gsap'
import React, { useEffect } from 'react'

const Terminal = () => {
  useEffect(() => {
    gsap.from('#terminal', {
      opacity: 0,
      x: 20,
      delay: 1.4,
      duration: 1,
    })
  }, [])

  return (
    <div id="terminal" className="ml-4 mr-12 mt-20 md:m-24">
      <div className="m-4 text-5xl font-bold">Get in touch</div>
      <p className="m-2 text-2xl font-thin">
        If you enjoyed what I do and want to give it a try, write me an email
      </p>

      <form
        className="mt-24 rounded-lg border-2 border-stone-50  bg-stone-200 font-mono"
        action="https://formsubmit.co/bojko.matias@gmail.com"
        method="POST"
      >
        <div className="relative h-8 w-full bg-gray-100 p-2">
          <div className="absolute h-4 w-4 rounded-full bg-cyan-400"></div>
          <div className="absolute h-4 w-4 translate-x-6 rounded-full bg-blue-600"></div>
          <div className="absolute h-4 w-4 translate-x-12 rounded-full bg-pink-400"></div>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://matiasbojko.com"
        ></input>
        <input type="text" name="_honey" className="hidden"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <div className="p-4"></div>
        <div className="m-4 text-2xl">
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            type="text"
            className="ml-5 w-3/4 rounded-md  bg-stone-300 text-black  focus:outline-none"
          />
        </div>{' '}
        <div className="m-4 flex text-2xl">
          <label htmlFor="email">Mail</label>
          <input
            required
            name="email"
            type="email"
            className=" ml-5 w-3/4  rounded-md  bg-stone-300 text-black  focus:outline-none"
          />{' '}
        </div>
        <div className="m-4 text-2xl">
          <label htmlFor="query">Query</label>
          <textarea
            required
            rows={4}
            name="query"
            className="ml-2 w-3/4 rounded-md bg-stone-300 text-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="m-8 rounded-md border-2 bg-stone-300 p-3 text-2xl transition duration-500 hover:-translate-y-1 hover:translate-x-1 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Terminal

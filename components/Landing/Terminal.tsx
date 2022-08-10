import React from 'react'

const Terminal = () => {
  return (
    <div id="terminal" className="ml-4 mr-12 md:m-24">
      <div className="m-4 text-3xl font-thin">Get in touch</div>
      <form
        className="rounded-lg border border-stone-50 bg-stone-200 p-3 font-mono"
        action="https://formsubmit.co/bojko.matias@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://matiasbojko.com"
        ></input>
        <input type="text" name="_honey" className="hidden"></input>
        <input type="hidden" name="_captcha" value="false"></input>
        <div className="m-4">
          <label htmlFor="name">Name</label>
          <input
            required
            name="name"
            type="text"
            className="mx-12 rounded-sm border bg-transparent text-black focus:border-stone-700 focus:outline-none"
          />
        </div>{' '}
        <div className="m-4">
          <label htmlFor="email">Mail</label>
          <input
            required
            name="email"
            type="email"
            className="mx-12  rounded-sm border bg-transparent text-black focus:border-stone-700 focus:outline-none"
          />{' '}
        </div>
        <div className="m-4">
          <label htmlFor="query">Query</label>
          <textarea
            required
            rows={4}
            name="query"
            className="mx-12 w-1/2 rounded-sm border bg-transparent text-black focus:border-stone-700 focus:outline-none"
          />
        </div>
      </form>
    </div>
  )
}

export default Terminal

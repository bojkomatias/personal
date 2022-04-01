import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
const offices = [
  {
    id: 1,
    city: 'Los Angeles',
    address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
  },
  {
    id: 2,
    city: 'New York',
    address: ['886 Walter Streets', 'New York, NY 12345'],
  },
  {
    id: 3,
    city: 'Toronto',
    address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
  },
  { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
]

export default function Contact() {
  return (
    <main className="h-screen w-full overflow-auto">
      <div className="mx-auto px-4 pt-12 sm:px-6 md:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 id="contact-heading" className="sr-only">
            Contact us
          </h2>

          {/* Contact information */}
          <div className="relative bg-gray-50">
            <div className="relative mx-auto max-w-7xl md:grid md:grid-cols-5">
              <div className="bg-gray-50 py-16 px-4 sm:px-6 md:col-span-2 md:px-8 md:py-24 xl:pr-12">
                <div className="mx-auto max-w-lg">
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
                    Get in touch
                  </h2>
                  <dl className="mt-8 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Postal address</dt>
                      <dd>
                        <p>Libertador San Martin </p>
                        <p>ER, Argentina</p>
                      </dd>
                    </div>
                    <div className="mt-6">
                      <dt className="sr-only">Phone number</dt>
                      <dd className="flex">
                        <PhoneIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">+54 (9) 345-5286829</span>
                      </dd>
                    </div>
                    <div className="mt-3">
                      <dt className="sr-only">Email</dt>
                      <dd className="flex">
                        <MailIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">bojko.matias@gmail.com</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-white py-16 px-4 sm:px-6 md:col-span-3 md:py-24 md:px-8 xl:pl-12">
                <div className="mx-auto max-w-lg md:max-w-none">
                  <form
                    action="https://formsubmit.co/bojko.matias@gmail.com"
                    method="POST"
                    className="grid grid-cols-1 gap-y-6"
                  >
                    <input
                      type="hidden"
                      name="_next"
                      value="https://matiasbojko.com"
                    ></input>
                    <input type="text" name="_honey" className="hidden"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Full name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="block w-full rounded-md border border-stone-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border border-stone-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md border border-stone-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        placeholder="Message"
                        defaultValue={''}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="hover:bg-primary inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-3 px-6 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

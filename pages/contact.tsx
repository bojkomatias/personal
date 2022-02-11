import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import axios from 'axios'

export async function getStaticProps() {
  const { data } = await axios.get(`/contact`)
  const { offices } = data

  return {
    props: {
      offices,
    },
  }
}

export default function Contact({ offices = null }) {
  return (
    <main className="overflow-hidden">
      {/* Header */}
      <div className="bg-warm-gray-50">
        <div className="py-24 lg:py-32">
          <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-warm-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="text-warm-gray-500 mt-6 max-w-3xl text-xl">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh
              phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis
              et vel et fermentum amet consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative bg-white" aria-labelledby="contact-heading">
        <div
          className="bg-warm-gray-50 absolute h-1/2 w-full"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            {/* Contact information */}
            <div className="relative bg-white">
              <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
              </div>
              <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                  <div className="mx-auto max-w-lg">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                      Leave your question
                    </h2>
                    <dl className="mt-8 text-base text-gray-500">
                      <div>
                        <dt className="sr-only">Postal address</dt>
                        <dd>
                          <p>742 Evergreen Terrace</p>
                          <p>Springfield, OR 12345</p>
                        </dd>
                      </div>
                      <div className="mt-6">
                        <dt className="sr-only">Phone number</dt>
                        <dd className="flex">
                          <PhoneIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">+1 (555) 123-4567</span>
                        </dd>
                      </div>
                      <div className="mt-3">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                          <MailIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">support@example.com</span>
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-6 text-base text-gray-500">
                      Looking for careers?{' '}
                      <a
                        href="#"
                        className="font-medium text-gray-700 underline"
                      >
                        View all job openings
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                  <div className="mx-auto max-w-lg lg:max-w-none">
                    <form
                      action="#"
                      method="POST"
                      className="grid grid-cols-1 gap-y-6"
                    >
                      <div>
                        <label htmlFor="full-name" className="sr-only">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="name"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="sr-only">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Phone"
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
                          className="block w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
      </section>

      {/* Contact grid */}
      <section aria-labelledby="offices-heading">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2
            id="offices-heading"
            className="text-warm-gray-900 text-3xl font-extrabold"
          >
            Our offices
          </h2>
          <p className="text-warm-gray-500 mt-6 max-w-3xl text-lg">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div key={office.id}>
                <h3 className="text-warm-gray-900 text-lg font-medium">
                  {office.city}
                </h3>
                <p className="text-warm-gray-500 mt-2 text-base">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

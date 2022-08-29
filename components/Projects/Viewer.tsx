import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'

const Viewer = ({ project }) => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" group ml-6 mr-16 mt-8 h-16 rounded-md bg-stone-50 transition-all duration-300 ease-in-out hover:bg-black hover:text-white md:mr-32 md:ml-16">
        <div
          onClick={openModal}
          className="z-0 flex cursor-pointer items-center justify-between"
        >
          <div className="pointer-events-none p-3 text-xl transition-all delay-150 duration-300 group-hover:font-bold md:pointer-events-auto md:text-2xl">
            {project.name}
          </div>
          <span className=" hidden w-1/3 text-xs opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:block">
            <p className="font-thin italic">{project.shortDescription}</p>
          </span>
          <div className="flex rounded-md ">
            {project.tags.map((t, i) => (
              <img
                src={t}
                alt=""
                className={`pointer-events-none my-4 mx-2 aspect-square h-8 brightness-110 drop-shadow grayscale invert saturate-[110%] group-hover:grayscale-0 ${
                  i > 2 ? 'hidden md:block' : ''
                }`}
              />
            ))}
          </div>
        </div>
        {/* Hover Image */}
        <div className="pointer-events-none invisible mt-2 opacity-0 transition-all delay-150 duration-300 ease-in-out group-hover:opacity-100 sm:group-hover:visible">
          {project.images.map((image, i) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`absolute z-50 ml-0 aspect-auto w-52 translate-x-0 pl-0 invert transition-all duration-700 group-hover:ml-6 group-hover:pl-6 sm:group-hover:ml-24 lg:w-80 ${
                i == 1
                  ? 'hidden group-hover:translate-x-[100%] sm:block'
                  : i == 2
                  ? 'hidden group-hover:translate-x-[200%] xl:block'
                  : 'group-hover:translate-x-[0%]'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Popover for descriptions */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="absolute inset-4 transform overflow-hidden rounded-2xl bg-stone-700 bg-opacity-40 p-6 text-left align-middle drop-shadow backdrop-blur backdrop-filter transition-all">
                  <button
                    type="button"
                    className=" float-right rounded-md text-stone-500 hover:text-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-700"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <Dialog.Title
                    as="h3"
                    className="text-4xl font-bold leading-10 text-gray-100"
                  >
                    {project.name}
                  </Dialog.Title>

                  <h4 className="mx-6 text-lg font-thin italic text-stone-200 opacity-75">
                    {project.shortDescription}
                  </h4>
                  <div className=" h-[90%] divide-stone-800 overflow-y-auto">
                    {/* Image 0 */}
                    <div className="mx-auto w-full rounded-lg md:w-2/3 xl:w-5/6">
                      <img
                        src={project.images[0]}
                        alt=""
                        className="mx-auto rounded-lg border border-stone-800 opacity-80 drop-shadow xl:w-2/3"
                      />
                    </div>
                    <div className="my-8 mx-auto w-full px-8 text-sm font-thin italic text-stone-200 opacity-80 md:w-2/3 md:text-lg xl:w-5/6 xl:text-2xl ">
                      {project.generalDescription}
                    </div>

                    {/* Image 1 */}
                    <div className="mx-auto flex w-full gap-2 overflow-auto rounded-lg md:w-2/3 xl:w-5/6">
                      <img
                        src={project.images[1]}
                        alt=""
                        className="mx-auto aspect-auto rounded-lg border border-stone-800 opacity-80 drop-shadow xl:w-2/3"
                      />{' '}
                    </div>
                    <div className="mx-auto flex w-full flex-col md:w-2/3 xl:w-5/6">
                      <div className="m-6 flex flex-row justify-between gap-1 self-center rounded-lg p-3 backdrop-blur md:gap-4 md:p-4">
                        {project.tags.map((t, i) => (
                          <img
                            src={t}
                            alt=""
                            className={`pointer-events-none mx-2 aspect-square h-8 drop-shadow md:h-12  `}
                          />
                        ))}
                      </div>
                      <div className="my-8 mx-auto w-full px-8 text-sm font-thin italic text-stone-200 opacity-80 md:w-2/3 md:text-lg xl:w-5/6 xl:text-2xl ">
                        {project.stackDescription}
                      </div>
                    </div>

                    {/* Image 2 */}
                    <div className="mx-auto w-full rounded-lg md:w-2/3 xl:w-5/6">
                      <img
                        src={project.images[2]}
                        alt=""
                        className="mx-auto rounded-lg border border-stone-800 opacity-80 drop-shadow xl:w-2/3"
                      />
                    </div>
                    <div className="my-8 mx-auto w-full px-8 text-center text-sm font-thin text-stone-200 md:w-2/3 md:text-lg xl:w-5/6 ">
                      <div>
                        <a
                          href={project.link}
                          className="text-xl font-light underline underline-offset-2 hover:underline-offset-4"
                        >
                          {project.name}
                        </a>
                      </div>
                      <div>
                        {project.devs ? (
                          <p className="mt-3 text-sm uppercase text-stone-300">
                            developers: <span>me, </span>
                            {project.devs.map((dev) => (
                              <a
                                key={dev.name}
                                href={dev.link}
                                target={'_blank'}
                                className="underline underline-offset-2"
                              >
                                {dev.name}
                                {', '}
                              </a>
                            ))}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Viewer

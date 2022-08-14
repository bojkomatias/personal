const Viewer = ({ project }) => {
  return (
    <div className="group ml-6 mr-12 mt-8 h-16 rounded-md bg-stone-50 transition-all duration-300 ease-in-out hover:bg-black hover:text-white md:mx-24">
      <div className="z-0 flex cursor-pointer items-center justify-between">
        <a
          href={project.link}
          target="_blank"
          className="pointer-events-none p-3 text-xl transition-all delay-150 duration-300 group-hover:font-bold md:pointer-events-auto md:text-2xl"
        >
          {project.name}
        </a>
        <span className=" hidden w-1/3 text-xs opacity-0 transition-opacity delay-300 duration-300 group-hover:opacity-100 md:block">
          <p className="font-thin italic">{project.description}</p>
          {project.devs ? (
            <p className="mt-1 text-[0.6rem] uppercase">
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

      <div className=" pointer-events-none mt-2 opacity-0 transition delay-150 duration-300 ease-in-out group-hover:block group-hover:opacity-100">
        {project.images.map((image, i) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute z-50 ml-0 aspect-auto w-80 translate-x-0 pl-0 invert transition-all duration-700 group-hover:pl-6 lg:w-96 lg:group-hover:ml-24 ${
              i == 1
                ? 'hidden group-hover:translate-x-[100%] md:block'
                : i == 2
                ? 'hidden group-hover:translate-x-[200%] xl:block'
                : 'group-hover:translate-x-[0%]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Viewer

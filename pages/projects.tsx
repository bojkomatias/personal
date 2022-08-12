import gsap, { Power3 } from 'gsap'
import React, { useEffect } from 'react'
import FloatingArrow from '../components/Layout/Loader'
import Viewer from '../components/Projects/Viewer'
import projectList from '../config/projects'

function projects() {
  useEffect(() => {
    gsap.from('#proj', {
      opacity: 0,
      x: 20,
      delay: 1.4,
      duration: 1,
    })
  }, [])

  return (
    <div id="proj">
      {projectList.map((p) => (
        <Viewer key={p.name} project={p} />
      ))}
    </div>
  )
}

export default projects

import React from 'react'
import Terminal from '../components/Landing/Terminal'
import FloatingArrow from '../components/Layout/FloatingArrow'

function contact() {
  return (
    <div>
      <FloatingArrow hrefTo={'/'} foward={false} />
      <Terminal />
    </div>
  )
}

export default contact

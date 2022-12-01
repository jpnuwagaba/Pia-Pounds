import React from 'react'

const SectionHeader = (props) => {
  return (
    <div>
      <h1 className='section-heading'>{props.heading}</h1>
    </div>
  )
}

export default SectionHeader
import React from 'react'
import Album from './Album'
import SectionHeader from './SectionHeader'

const Albums = () => {
  return (
    <div className='albums'>
      <SectionHeader heading="albums" />
      <div className="albums-grid container-80">
        <Album />
      </div>
    </div>
  )
}

export default Albums
import React from 'react'
import SectionHeader from './SectionHeader'
import YTVideo from './YTVideo'

const MusicShowcase = () => {
  return (
    <div className='music-showcase container-80 '>
      <SectionHeader heading="watch the latest videos"/>
      <div className='music-showcase-inner'>
        <div className="music-showcase-item"><YTVideo src="https://www.youtube.com/embed/A3LH5NVIFyo" /></div>
        <div className="music-showcase-item"><YTVideo src="https://www.youtube.com/embed/Jxhn6s5ziEw" /></div>
        <div className="music-showcase-item"><YTVideo src="https://www.youtube.com/embed/6FdKQwbAHxs" /></div>
      </div>
    </div>
  )
}

export default MusicShowcase
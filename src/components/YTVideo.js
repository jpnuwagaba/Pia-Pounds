import React from 'react'

const YTVideo = (props) => {
  return (
    <div className='yt-video'>
      <iframe width="100%" height="315" src={props.src} title="YouTube video player" frameBorder="0" borderRadius="10px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen="true"></iframe>
    </div>
  )
}

export default YTVideo
import React from 'react'

const Album = ({title, image, date}) => {
  return (
    <div className='album'>
      <div style={{backgroundImage: `url(../img/${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="album-image"></div>
      <div className="album-description">
        <div className="album-title"><h3>{title}</h3></div>
        <div className="album-date"><p>{date}</p></div>
      </div>
    </div>
  )
}

export default Album
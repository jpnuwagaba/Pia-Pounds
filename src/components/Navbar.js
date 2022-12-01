import React from 'react'
import ArtistLogo from './ArtistLogo'
import Social from './Social'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="container-80">
        <div className="nav-up">
          <ArtistLogo />
          <div className="hide-on-small"><Social /></div>
          <div className="small-menu show-on-small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
          </div>
        </div>
        <div className="nav-down">
          <div className="nav-els">
            <Link className='nav-el' to="/">home</Link>
            <Link className='nav-el' to="/about">about</Link>
            {/* <Link to="/">music</Link>
            <Link to="/">music</Link>
            <Link to="/">music</Link>
            <Link to="/">music</Link> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default navbar
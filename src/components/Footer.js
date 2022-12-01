import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <footer>
      <div className='footer container-80'>
        <div className='tiny-txt'>&copy; 2022 - Pia Pounds, All Rights Reserved</div>
        <div><Social /></div>
        <div className='footer-links'>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
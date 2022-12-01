import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Albums from '../components/Albums';
import Songs from '../components/Songs';
import Shows from '../components/Shows';
import Overview from '../components/Overview';


const ArtistShowcase = () => {
  return (
    <div className='artist-showcase'>
      <div style={{ backgroundImage: `url(../img/pia3.jpg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="artist-showcase-item artist-portrait"></div>
      <div style={{ backgroundImage: `url(../img/pia.jpeg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="artist-showcase-item side-content side-content-1"></div>
      <div style={{ backgroundImage: `url(../img/pia2.jpg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="artist-showcase-item side-content side-content-2"></div>
    </div>
  )
}

export default ArtistShowcase
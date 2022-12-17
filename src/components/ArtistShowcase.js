import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Albums from '../components/Albums';
import Songs from '../components/Songs';
import Shows from '../components/Shows';
import Overview from '../components/Overview';


const ArtistShowcase = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(../img/pia.jpeg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="container-80 artist-showcase">
          <div className="showcase-text">
            <h1>Tupaate EP</h1>
            <p>Listen to Music by Pia Pounds</p>
            <button className="btn btn-link"><a href="https://youtube.com/playlist?list=PLECDSciBcLjCoX436NiZyIDjfwJoHb3IJ" target={'_blank'}>Listen</a></button>
          </div>
        </div>
        <div className="dark-overlay"></div>
      </div>
    </>
  )
}

export default ArtistShowcase
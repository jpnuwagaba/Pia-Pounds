import React from 'react'
import ArtistShowcase from '../components/ArtistShowcase';
import MusicShowcase from '../components/MusicShowcase';
import Songs from '../components/Songs';

const Home = () => {
  return (
    <div>
      <ArtistShowcase />
      <Songs />
      <MusicShowcase />
    </div>
  )
}

export default Home
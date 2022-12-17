import React from 'react'
import ArtistShowcase from '../components/ArtistShowcase';
import MusicShowcase from '../components/MusicShowcase';
import PictureShowcase from '../components/PictureShowcase';
import Songs from '../components/Songs';
import UtilitySection from '../components/ShowSection';

const Home = () => {
  return (
    <div>
      <ArtistShowcase />
      <PictureShowcase />
      {/* <Songs /> */}
      <MusicShowcase />
      <UtilitySection
        title={'Shows'}
        briefText={'Catch up with all the Latest Events'}
      />
    </div>
  )
}

export default Home
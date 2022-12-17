import SectionHeader from './SectionHeader'
import React from 'react'
import Songbar from './Songbar'
import SongHeader from './SongHeader'
import Collapsible from 'react-collapsible';


const Songs = () => {
  return (
    <div className='songs container-80'>
      <SectionHeader heading="songs"/>
      <SongHeader />
      <ul>
        <li><Songbar songnumber={1} title={"Tupaate"} album={"Tupaate"} date={"1/2/2022"} ytLink={"https://www.youtube.com/watch?v=A3LH5NVIFyo"}/></li>
        <li><Songbar songnumber={2} title={"Wakikuba"} album={"Tupaate"} date={"1/2/2022"} ytLink={"https://www.youtube.com/watch?v=2PGa_0A--RI&list=OLAK5uy_njd6DVp6axHfsc9FEoRaAmS9X25UCqKSE"} /></li>
        <li><Songbar songnumber={3} title={"Selection"} album={"Tupaate"} date={"1/2/2022"} ytLink={"https://www.youtube.com/channel/UC8jVGpwn-ImdKSYRavjT5vg"} /></li>
        <li><Songbar songnumber={4} title={"Good Good"} album={"Tupaate"} date={"1/2/2022"} ytLink={"https://www.youtube.com/watch?v=YFa8TOOzyo8&list=OLAK5uy_njd6DVp6axHfsc9FEoRaAmS9X25UCqKSE"} /></li>
        <li><Songbar songnumber={5} title={"Bitimba"} album={""} date={"1/2/2022"} ytLink={"https://www.youtube.com/watch?v=Jxhn6s5ziEw"} /></li>
      </ul>
    </div>
  )
}

export default Songs
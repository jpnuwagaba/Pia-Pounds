import React from 'react'
import ShowSectionGridItem from './ShowSectionGridItem'

const ShowSection = ({ title, briefText }) => {
  return (
    <>
      <div className='show-section container-80'>
        <div className="show-section-header">
          <h1>{title}</h1>
          <p>{briefText}</p>
        </div>
        <div className="show-section-grid">
          <div className="show-section-grid-item-1"><ShowSectionGridItem showTitle={'Show 1'} showDate={'03/01/2023'} img={'show1.jpg'} showLink={'Get a ticket'}/></div>
          <div className="show-section-grid-item-2"><ShowSectionGridItem showTitle={'Show 2'} showDate={'03/01/2023'} img={'show2.jpg'} showLink={'Catch up'}/></div>
          <div className="show-section-grid-item-3"><ShowSectionGridItem showTitle={'Show 3'} showDate={'03/01/2023'} img={'show3.jpg'} showLink={'Catch up'}/></div>
          <div className="show-section-grid-item-4"><ShowSectionGridItem showTitle={'Show 4'} showDate={'03/01/2023'} img={'show4.jpg'} showLink={'Catch up'}/></div>
          <div className="show-section-grid-item-5"><ShowSectionGridItem showTitle={'Show 5'} showDate={'03/01/2023'} img={'show5.jpg'} showLink={'Catch up'}/></div>
        </div>
      </div>
    </>
  )
}

export default ShowSection
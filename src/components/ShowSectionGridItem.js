import { Link } from 'react-router-dom'
import React from 'react'

const ShowSectionGridItem = ({ img, showTitle, showLink, showDate }) => {
  return (
    <div>
      <Link>
        <div style={{ backgroundImage: `url(../img/${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="show-section-grid-item">
          <div className="show-section-item-desc">
            <h3>{showTitle} - {showDate}</h3>
            <div className='show-link'><Link>{showLink}</Link></div>
          </div>
          <div className="show-section-grid-item-overlay"></div>
        </div>
      </Link>
    </div>
  )
}

export default ShowSectionGridItem
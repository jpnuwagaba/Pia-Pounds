import React from 'react'

const PictureShowcase = () => {
  return (
    <div className='picture-showcase container-80'>
      <div style={{ backgroundImage: `url(../img/pia4.jpg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="picture-showcase-item">
        <div className="picture-overlay"></div>
        <div className="picture-text">CULTURE</div>
      </div>
      <div style={{ backgroundImage: `url(../img/pia3.jpg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="picture-showcase-item">
        <div className="picture-overlay"></div>
        <div className="picture-text">FASHION</div>
      </div>
      <div style={{ backgroundImage: `url(../img/pia2.jpg`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}  className="picture-showcase-item">
        <div className="picture-overlay"></div>
        <div className="picture-text">UGANDAN</div>
      </div>
    </div>
  )
}

export default PictureShowcase
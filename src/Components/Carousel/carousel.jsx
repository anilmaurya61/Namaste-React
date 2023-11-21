import React from 'react'
import './carousel.css'
import Heading from '../../utils/Heading'

const Carousel = () => {
  return (
    <>
      <div className="carousel-container">
        <Heading heading = "Best offers for you"/>
        <div className="offer-card-container">
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5" alt="" />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/d59fb2bd4af3a0850d426a658172f899" alt="" />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/071d07e5d5deb5e3da47feef18fb14fc" alt="" />
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5" alt="" />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4bb5e5e0ff6ee6d8465bb57a439085c1" alt="" />
        </div>
      </div>
    </>
  )
}

export default Carousel;

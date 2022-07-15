import React from 'react'

import banner from '../assets/images/banner.jpg'
import nut from '../assets/images/nut.png'

const Home = () => {
  return (
    <div className="banner">
      <img src={banner} className="banner__image" alt="logo"/>
      <div className="banner__text">
        <p className="banner__text__big">Download Shop Coin USA App</p>
        <p className="banner__text__small">Manage crypto assets at your fingertips</p>
        <a href="/" className="banner__text__btn"><img src={nut} alt="button"/></a>
        <p className="banner__text__middle"><i>For Android</i></p>
      </div>
    </div>
  )
}

export default Home

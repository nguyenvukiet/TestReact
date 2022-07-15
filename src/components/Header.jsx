import React, {useRef} from 'react'


import logo from '../assets/images/logo.png'



const Header = () => {

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')


  return (
    <div className="header">
        <div className="header__left">
            <div className="header__left__logo">
                <a href="/">
                    <img src={logo} className="header__left__logo__header-logo" alt="logo"/>
                </a>
            </div>
        </div>

        <div className="header__right__mobile__toggle" onClick={menuToggle} >
              <i className='bx bx-menu'></i>
        </div>
        <div>
        
            <div className="header__right" ref={menuLeft}>
                <div className="header__right__close" onClick={menuToggle}>
                        <i className='bx bx-x' ></i>
                </div>
                <div className="header__right__item ">
                    <a href="/">HOME</a>
                </div>
                <div className="header__right__item ">
                    <a href="/">DEPOSIT-WITHDRAW</a>
                </div>
                <div className="header__right__item ">
                    <a href="/">BLOG</a>
                </div>
                <div className="header__right__item ">
                    <a href="/">ABOUT US</a>
                </div>
                <div className="header__right__item ">
                    <a href="/">CONTACT US</a>
                </div>
            </div>  
            <div className="header__right__btn-login button-login">
                    <button className="header__right__btn-login"><a href="/login">LOGIN</a></button>
            </div>
        </div>
    </div>     
  )
}

export default Header

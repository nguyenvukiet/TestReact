import React from 'react'

import Grid from './Grid'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <Grid
                col= {4}
                mdCol = {2}
                smCol = {1}
                gap = {10}
            >
              <div>
                  <div className="footer__title">
                    Products
                  </div>
                  <div className="footer__content">
                    <p>
                      <a href="/">
                        Blockchain Explorer
                      </a>
                    </p>
                    <p>
                      <a href="/">
                        Crypto API
                      </a>
                    </p>
                    <p>
                      <a href="/">
                        Crypto Indices
                      </a>
                    </p>
                    <p>
                      <a href="/">
                       Interest
                      </a>
                    </p>
                    <p>
                      <a href="/">
                        Jobs Board
                      </a>
                    </p>
                    <p>
                      <a href="/">
                        Sitemap 
                      </a>
                    </p>
                  </div>
              </div>
              <div>
                  <div className="footer__title">
                    Company
                  </div>
                  <div className="footer__content">
                  <p>
                      <a href="/">
                      About us
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Terms of use
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Disclaimer
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Methodology
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Careers We’re hiring!
                      </a>
                    </p>
                  </div>
              </div>
              <div>
                  <div className="footer__title">
                    Support
                  </div>
                  <div className="footer__content">
                  <p>
                      <a href="/">
                      Request Form
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Contact Support
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      FAQ
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Glossary
                      </a>
                    </p>
                  </div>
              </div>
              <div>
                  <div className="footer__title">
                    Socials
                  </div>
                  <div className="footer__content">
                  <p>
                      <a href="/">
                      Facebook
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Twitter
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Telegram
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Instagram
                      </a>
                    </p>
                    <p>
                      <a href="/">
                      Interactive Chat
                      </a>
                    </p>
                  </div>
              </div>
            </Grid>
            <div className="footer__end">
            <hr />
              <p>Copyright © 2022 <strong><a href="https://shopcoinusa.com/">Shopcoin.com</a></strong></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer

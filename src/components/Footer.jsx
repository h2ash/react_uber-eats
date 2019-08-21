import React from 'react'
import { IMG_URL } from '../api/constants'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <div className='footer__upper-part'>
        <div className='footer__logo-mobile'>
          <a href="">
            <img
              className='footer__logo'
              src={`${IMG_URL}/12c47a69e1022b581a7e823e9bd45466.svg`}
              alt="Logo"
            />
          </a>
          <a href="">
            <img
              className='footer__mobile-app'
              src={`${IMG_URL}/d0558d91063038236b60e3ef71fdc1fd.svg`}
              alt=""
            />
            <img
              className='footer__mobile-app'
              src={`${IMG_URL}/cf6dad406fdfdcd290fd40de9008ae50.png`}
              alt=""
            />
          </a>
        </div>
  
        <div className='footer__list-about'>
          <a href="" className='footer__list-link footer__list-link-bold'>
            About UberEats
          </a>
          <a href="" className='footer__list-link'>Read our blog</a>
          <a href="" className='footer__list-link'>Sign up to deliver</a>
          <a href="" className='footer__list-link'>Add your restaurant</a>
        </div>
  
        <div>
          <a href="" className='footer__list-link'>Get help</a>
          <a href="" className='footer__list-link'>Read FAQs</a>
          <a href="" className='footer__list-link'>View all cities</a>
          <a href="" className='footer__list-link'>English</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
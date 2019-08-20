import React from 'react';
import './App.scss';

const BASE_URL = '';
const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';

const App = () => (
  <div className="App">
    <header className='header'>
      <div className='container header__container'>
        <a href="" className='header__logo-link'>
          <img 
            className='header__logo-image'
            src={`${IMG_URL}/f8f0721f871b3704cce92eb96bc6e504.svg`}
            alt="Logo"
          />
        </a>
  
        <button className='header__location'>Location</button>
        <button className='header__delivery-time'>Delivery now</button>
        <button className='header__search'>Search</button>
        <a href="" className='header__sign-in'>Sign</a>
      </div>
    </header>
  </div>
);

export default App;

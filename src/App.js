import React from 'react';
import './App.scss';
import { statement } from '@babel/template';
import { async } from 'q';

const BASE_URL = 'https://h2ash.github.io/react_uber-eats/api';
const IMG_URL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';

class App extends React.Component {
  state = {
    stores: [],
    isLoaded: false,
  }

  async componentDidMount() {
    const stores = await this.getData();

    this.setState({ stores });
  }

  getData = async () => {
    const response = 
      await fetch(`${BASE_URL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
    const result = await response.json();

    console.log(result);

    return result.data.feedItems.map(item => {
      return result.data.storesMap[item.uuid];
    })
  }

  render() {
    const { stores } = this.state;
    console.log(this.state.stores);

    return (
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
        <main>
          <ul>
            {
              stores.map(store => (
                <li>{store.title}</li>
              ))
            }
          </ul>
        </main>
      </div>
    )
  }
};

export default App;

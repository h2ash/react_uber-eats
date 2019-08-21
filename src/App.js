import React from 'react';
import './scss/App.scss';

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
          <ul className='main__container'>
            {
              stores.map(store => (
                <li className='main__card'>
                  <img
                    className='main__card-image'
                    src={store.heroImageUrl}
                    alt="Food photo" />
                  <div className='main__card-title'>{store.title}</div>
                  <ul className='main__card-categories-list'>
                    {store.categories.map(category => (
                      <li className='main__card-categories-item'>
                        {category}
                      </li>
                    ))}
                  </ul>
                  <div className={store.etaRange ? 'main__card-time' : ''}>
                    {store.etaRange && store.etaRange.text}
                  </div>
                </li>
              ))
            }
          </ul>
        </main>

      </div>
    )
  }
};

export default App;

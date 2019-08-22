import React from 'react';
import './scss/App.scss';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BASE_URL } from './api/constants'

/**
 * [] - footer component
 *    [] - поправить семантику футера-верха
 *        [] - до этого ещё не дошёл, 
 *             а уже какая-то шляпа с центрированием футера
 */

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

    return result.data.feedItems.map(item => {
      return result.data.storesMap[item.uuid];
    })
  }

  render() {
    const { stores } = this.state;
    console.log(this.state.stores);

    return (
      <div className="App">
        <Header />
        <Main stores={stores} />
        <Footer />
      </div>
    )
  }
};

export default App;

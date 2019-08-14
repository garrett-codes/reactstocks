import React from 'react';
import logo from './logo.svg';
import './App.css';
import StocksContainer from './containers/StocksContainer'

class App extends React.Component {

  state = {
    stocks: []
  }

  componentDidMount = () => {
    fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
    .then(res => res.json())
    .then(stockData => this.setState({stocks: stockData.symbolsList}))
  }
  render() {
    return (
      <div className="App">
        {this.state.stocks.length > 0 ? <StocksContainer stockData={this.state.stocks}/> : null}
      </div>
    );
  }
}

export default App;

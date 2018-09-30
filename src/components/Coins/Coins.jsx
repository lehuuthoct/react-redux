import { array } from 'prop-types';
import React, { Component } from 'react';
import { isFirstRender } from '../../shared/utils/frontend';
import './Coins.css';

class Coins extends Component {
  static propTypes = {
    coins: array
  };

  constructor() {
    super();
    // init initial state
    this.state = {
      dollars: 0
    };
  }

  componentWillMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  // only update UI if dollars are multiples of 10
  // shouldComponentUpdate(props, state) {
  //   // return state.dollars % 10 === 0;
  //   return true;
  // }

  handleOnChange = e => {
    this.setState({
      dollars: Number(e.target.value || 0)
    });
  };

  render() {
    const {
      coins: { coins }
    } = this.props;
    console.log('coins -- ', coins, this.props);

    if (isFirstRender(coins)) {
      return null;
    }

    return (
      <div className="coin-app">
        <div className="coin-list">
          <h1>Top 100 Coins</h1>
          <ul>
            {coins.map((coin, key) => (
              <li key={key}>
                <span className="left">
                  {coin.rank}. {coin.name} {coin.symbol}
                </span>
                <span className="right">${coin.price_usd}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Coins">
          <h1>Buy Crypto Coins Application</h1>

          {/* question  */}
          <div className="question">
            <p> How much dollars you would like to exchange for coins?</p>
            <p>
              <input
                placeholder="0"
                onChange={this.handleOnChange}
                type="text"
              />
            </p>
          </div>

          {/* answer */}
          <div className="answer">
            <p>Crypto coin price: $10</p>
            <p>
              You can buy <strong> {this.state.dollars / 10}</strong> coins
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Coins;

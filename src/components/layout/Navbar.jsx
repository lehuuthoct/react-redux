import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/numbers">Numbers</Link>
          </li>
          <li>
            <Link to="/coins">Coins</Link>
          </li>
          <li>
            <Link to="/animation">Animation</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

import React from 'react';
import logo from './img/logo.jpg';
import Menu from './Menu';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
    render() {
      return (
        <div className="App">
        <header className="App-header">
          <p id="coffee_title">
             DOLLAR<h id="coffee_name">COFFEE</h>SHOP
          </p>
          <div class="horizontal_menu_container">
            <Router>
              <div><Link to="./menu" class="horizontal_menu_item">Menu</Link></div>
              <div><Link to="./order" class="horizontal_menu_item">Order</Link></div>
              <div><Link to="./about" class="horizontal_menu_item">About</Link></div>
            </Router>

          </div>
        </header>
      </div>
      );
    }
  }
export default App;


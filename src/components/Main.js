import React from 'react';
import logo from '../img/logo.jpg';
import Menu from '../Menu';
import './App.css';
import { Link } from "react-router-dom";


class Main extends React.Component {
    render() {
      return (
        <div className="Main">
        <header className="App-header">
          <p id="coffee_title">
             DOLLAR<h id="coffee_name">COFFEE</h>SHOP
          </p>
          <div class="horizontal_menu_container">
            <Link to="/menu" class="horizontal_menu_item">Menu</Link>
            <Link to="/Order" class="horizontal_menu_item">Order</Link>
            <Link to="/About" class="horizontal_menu_item">About</Link>
          </div>
        </header>
      </div>
      );
    }
  }
export default Main;


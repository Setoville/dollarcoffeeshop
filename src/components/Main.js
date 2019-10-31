import React from 'react';
import './Style.css';
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
            <Link to="/menu" class="horizontal_main_item">Menu</Link>
            <Link to="/order" class="horizontal_main_item">Order</Link>
            <Link to="/about" class="horizontal_main_item">About</Link>
          </div>
        </header>
      </div>
      );
    }
  }
export default Main;


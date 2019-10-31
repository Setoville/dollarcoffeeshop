import React from 'react';
import axios from 'axios';
import './Style.css';
import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event){
    console.log("form submitted");
    event.preventDefault();
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("handle change", event);
  }
  render() {
    return (
      <div className="Main">
      <header className="Menu-header">
      <div class="horizontal_menu_container">
            <Link to="/" class="horizontal_main_item">Home</Link>
            <Link to="/menu" class="horizontal_main_item">Menu</Link>
            <Link to="/order" class="horizontal_main_item">Order</Link>
            <Link to="/about" class="horizontal_main_item">About</Link>
          </div>
        <p id="coffee_title">
           DOLLAR<h id="coffee_name">COFFEE</h>SHOP
        </p>
        <p>Log in to place an order</p>
        <form onSubmit={this.handleSubmit}>
          <div class="vertical_menu_container">
            <div class="vertical_menu_item">
              <input
              type="email" 
              name="email" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              required
              />
            </div>
            <div class="vertical_menu_item">
              <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              required
              />
            </div>
            <div class="vertical_menu_item">
              New user? Register here
            </div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </header>
    </div>
    );
  }
}
export default Login
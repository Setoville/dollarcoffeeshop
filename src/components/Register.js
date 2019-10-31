import React from 'react';
import axios from 'axios';
import './Style.css';
import { Link } from "react-router-dom";
class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      registration_errors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event){
    console.log("form submitted");
    var register_object = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "password": this.state.password
    };

    axios.post('https://dollar-coffee-shop-api.herokuapp.com/auth/register',register_object,{
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      console.log("registration res", response);
    })
    .catch(error => {
      console.log("registration error", error);
    });

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
        <p>Register</p>
        <form onSubmit={this.handleSubmit}>
          <div class="vertical_menu_container">
            <div class="vertical_menu_item">
              <input
              type="string" 
              name="firstName"
              placeholder="First Name"
              value={this.state.firstname} 
              onChange={this.handleChange} 
              required
              />
            </div>           
            <div class="vertical_menu_item">
              <input
              type="string" 
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastname} 
              onChange={this.handleChange} 
              required
              />
            </div>    
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
            <button type="submit">Register</button>
          </div>
        </form>
      </header>
    </div>
    );
  }
}
export default Register
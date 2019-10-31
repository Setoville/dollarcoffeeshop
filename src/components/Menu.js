import React from 'react'
import axios from 'axios';

class Menu extends React.Component {
  state = {
    coffee_data: []
  }
  componentDidMount(){
    axios.get('https://dollar-coffee-shop-api.herokuapp.com/menu')
    .then(res => {
      const coffee_data = res.data.coffees;
      this.setState({coffee_data})
    })
  }
  render() {
      return(
        <header className="Menu-header">
        <p id="coffee_title">
           DOLLAR<h id="coffee_name">COFFEE</h>SHOP
        </p>
        <div class="vertical_menu_container">
        {
         this.state.coffee_data.map(item => <div class="vertical_menu_item">{item.Name}</div>)
        }
        </div>
      </header>

      );  
  }
}
export default Menu
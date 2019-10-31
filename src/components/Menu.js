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
    .then(() => {
      this.state.coffee_data.map((coffee_item) => {
        var menu_item = document.createElement("div")
        menu_item.className += 'vertical_menu_item'
        menu_item.className += ' horizontal_menu_container'
        
        //for each vertical_menu_item, we need 3 horizontal_menu_items.
        var coffee_name = document.createElement("div")
        coffee_name.className += 'horizontal_menu_item'
        coffee_name.textContent = coffee_item.Name
        menu_item.appendChild(coffee_name)

        var coffee_description = document.createElement("div")
        coffee_description.className += 'horizontal_menu_item'
        coffee_description.textContent = coffee_item.Description
        menu_item.appendChild(coffee_description)

        var coffee_price = document.createElement("div")
        coffee_price.className += 'horizontal_menu_item'
        coffee_price.textContent = coffee_item.Price
        menu_item.appendChild(coffee_price)

        document.getElementById('vertical_menu_container').appendChild(menu_item)
        } 
      )
    }

    );
  }
  render() {
      return(
        <header className="Menu-header">
        <p id="coffee_title">
           DOLLAR<h id="coffee_name">COFFEE</h>SHOP
        </p>
        <div id="vertical_menu_container"></div>
      </header>
      );  
  }
}
export default Menu
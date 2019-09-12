import React from "react";
import "./App.css";

interface MenuItem {
  coffee: string;
  type: string;
}

interface State {
  menuItems?: MenuItem[];
}

class App extends React.Component<{}, State> {
  url = "https://dollar-coffee-shop-api.herokuapp.com/front_page/menu";

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  private newDivWithClassName(name: string) {
    let el = document.createElement("div");
    el.className = name;
    return el;
  }

  public componentDidMount() {
    let self = this;
    let menuItems = document.getElementById("menuitems");
    fetch(this.url)
      .then(resp => resp.json())
      .then(function(data) {
        //for each inside of data
        return data.map(function(coffeeItem: MenuItem) {
          //make a container div
          let coffeeItemDiv = self.newDivWithClassName("container");

          //make a coffee name div within that container
          let coffeeNameDiv = self.newDivWithClassName("coffeeName");
          coffeeNameDiv.innerHTML = coffeeItem.coffee;
          coffeeItemDiv.appendChild(coffeeNameDiv);

          //make a coffee type div within that container
          let coffeeTypeDiv = self.newDivWithClassName("coffeeType");
          coffeeTypeDiv.innerHTML = coffeeItem.type;
          coffeeItemDiv.appendChild(coffeeTypeDiv);

          //append to menu items
          if (menuItems !== null) {
            menuItems.appendChild(coffeeItemDiv);
          }
          console.log(coffeeItem.type);
          return data;
        });
      });
  }

  public render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="title"></div>
          <div className="subtitle">
            "We WILL
            <br />
            spell your
            <br />
            name wrong!"
          </div>
        </div>
        <div className="menu">
          <div className="menutitle">Our Menu</div>
          <div id="menuitems"></div>
        </div>
      </div>
    );
  }
}

export default App;

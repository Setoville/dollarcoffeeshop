import React from 'react';
import axios from 'axios';
import './Style.css';
import { Link,BrowserRouter,Route } from "react-router-dom";
class Order extends React.Component {
  constructor(){
    super();

    this.state = {
      loggedinStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }
  render() {
    return (
      <div className="Order">
      <header className="Menu-header">
        <BrowserRouter>
          <Route 
          exact path={"/"}
          >
          </Route>
        </BrowserRouter>

      </header>
    </div>
    );
  }
}
export default Order
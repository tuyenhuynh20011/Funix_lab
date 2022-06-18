import './App.css';
import Menu from './components/MenuComponents'
import React,{Component} from 'react'
import { DISHES } from './shared/dishes';
import {Navbar,NavbarBrand} from 'reactstrap'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes:DISHES
    }
  }
  render() {
    return (
      <div className="App">
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href='/'>
                  Ristorance Con fusion 
                </NavbarBrand>
              </div>
            </Navbar>
            <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;

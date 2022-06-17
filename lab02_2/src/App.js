import './App.css';
import Menu from './components/MenuComponents'
import React,{Component} from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
class App extends Component {
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
            <Menu />
      </div>
    );
  }
}

export default App;

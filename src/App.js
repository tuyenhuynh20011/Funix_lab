import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import NameForm from './components/formcoponent'
import './App.css';
import {DEPARTMENTS, ROLE, STAFFS} from './shared/staffs';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS
    };
  console.log(props);
  }


  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            </div>
          </Navbar>
          <Menu nhanvien = {this.state.staffs}/>
          <NameForm></NameForm>
      </div>
    );

  }
  
}

export default App;

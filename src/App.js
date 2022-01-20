import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {STAFFS} from './shared/staffs';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS,
      cot: 3
    };
  }
  thaydoicot(c){
    this.setState({cot:c});
  }
  render(){
    console.log('Menu.props');
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
            </div>
          </Navbar>
          <div style={{display:"inline"}}>
          <p style={{display:"inline",margin:"10px"}}>Chọn số cột hiển thị:</p>
          <p onClick={()=>this.thaydoicot(1)} style={{display:"inline",margin:"10px"}}>1</p>
          <p onClick={()=>this.thaydoicot(2)} style={{display:"inline",margin:"10px"}}>2</p>
          <p onClick={()=>this.thaydoicot(3)}style={{display:"inline",margin:"10px"}}>3</p>
          <p onClick={()=>this.thaydoicot(6)} style={{display:"inline",margin:"10px"}}>6</p>
          </div>
          
          <Menu nhanvien = {this.state.staffs} socot ={this.state.cot}/>
      </div>
    );

  }
  
}

export default App;

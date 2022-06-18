import React, { Component } from 'react'
import {DEPARTMENTS,ROLE,STAFFS} from './shared/Staff'
import {Navbar,NavbarBrand} from 'reactstrap'
import StaffListComponent from './StaffList/StaffListComponent'
export class App extends Component {
    constructor(props) {
      super(props)
      this.state={
        department:DEPARTMENTS,
        role:ROLE,
        staff:STAFFS
      }

    }

  render() {
    return (
      <>
      <div className="App">
            <Navbar dark color="primary">
              <div className="container">
                <NavbarBrand href='/'>
                  Ứng dụng quản lý nhân sự V1.0
                </NavbarBrand>
              </div>
         
            </Navbar>
            
            <StaffListComponent department={this.state.department} role={this.state.role} staff={this.state.staff} />
       </div>
      </>
      )
  }
}

export default App
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
   constructor(prop){
     super(prop);
     this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
   }
   toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
      <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            {/* <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink className="nav-link" to='/safft'><span className="fa fa-group fa-lg"></span>Nhân viên</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/department'><span className="fa fa-address-card fa-lg"></span> Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa fa-money fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
      </Navbar>
         {/* <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron> */}
    </React.Fragment>
    );
  }
}

export default Header;
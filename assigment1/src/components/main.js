import React, { Component } from "react";
import Header from "./header";
import Home from "./home";
import { Switch, Route, Redirect } from "react-router-dom";
import Staff from "./staff";
import Departments from "./departments";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/staff";
import Salary from "./salary";
import StaffDetail from "./staffDetail";
import Footer from "./footer";
import Search from "./search";
class Main extends Component {
  // Nen khai bao dau vao du lieu va state o ham Main , khong nen dung o ham staff hay ham depmarnt
  // truyen state tu component cha sang component con
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {

    const HomePage = () => {
      return <Home />;
    };

    // Viet cai ham StaffDetail
    // Muc dich cai nay la truyen cai chi tiet nhan vien co chinh xác id vao ham  StaffDetail
    const StaffId = ({ match }) => {
      // console.log(match);
      return (
        <StaffDetail
          staff={this.state.staffs.find(
            (staff) => staff.id === +match.params.id
          )}
        />
      );
    };
    // const a=this.state.staffs.filter((obj) =>  {
    //   return Object.keys(obj).some((key) => {
    //     return obj[key].includes('a');
    //   })
    // })
    // console.log(a);
    
    const SearchVal = ({ match }) => {
      console.log(match);
      return (
        <Search staff={this.state.staffs.filter(item=>item.name.toLowerCase().includes(match.params.value.toLowerCase()))}
        />
      )
   

    }
    return (
      <>
        <Header />  
          <Switch>
            <Route path="/home" component={HomePage} />
            <Redirect path="/home" />
            <Route
              exact
              path="/staff"
              component={() => <Staff staff={this.state.staffs} />}
            />
            <Route
              path="/departments"
              component={() => (
                <Departments department={this.state.departments} />
              )}
            />
            <Route
              path="/salary"
              component={() => <Salary staff={this.state.staffs} />}
            />
            {/* <Route
              path="/search"
              component={() => <Search />}
            /> */}
            {/* <Route exact path="/staff/:id" component={({match}) => (
               <StaffDetail staff={this.state.staffs.find(p => p.id === match.params.id)} /> 
              )} /> */}
            <Route path="/staff/:id" render={StaffId} />
            <Route path="/search/:value" render={SearchVal} />
          </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;

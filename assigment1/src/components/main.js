import React, { Component } from "react";
import Header from "./header";
import Home from "./home";
import { Switch, Route, Redirect,withRouter  } from "react-router-dom";
import Staff from "./staff";
import Departments from "./departments";
import { DEPARTMENTS, ROLE, STAFFS } from "../shared/Staff";
import Salary from "./salary";
import StaffDetail from "./staffDetail";
import Footer from "./footer";
import Search from "./search";
import { connect } from "react-redux";
import {FetchApi,CreateStaff} from '../redux/actionCreate'
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    department: state.department,
    newstaff: state.newstaff,
  };
};
const mapDispatchToProps = (dispatch) => ({
  FetchApi: () => dispatch(FetchApi()),
  CreateStaff:(newstaff)=> dispatch(CreateStaff(newstaff))
  })
class Main extends Component {
  // Nen khai bao dau vao du lieu va state o ham Main , khong nen dung o ham staff hay ham depmarnt
  // truyen state tu component cha sang component con
  constructor(props) {
    super(props);
    this.state={};
  }
  componentDidMount(){
    this.props.FetchApi();
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
          staff={this.props.staffs.find(
            (staff) => staff.id === +match.params.id
          )}
        />
      );
    };
    const SearchVal = ({ match }) => {
      return (
        <Search
          staff={this.props.staffs.filter((item) =>
            item.name.toLowerCase().includes(match.params.value.toLowerCase())
          )}
        />
      );
    };
    return (
      <>
        <Header createStaff={this.props.CreateStaff} fetchApi={this.props.FetchApi} />
        <div className="container ">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Redirect path="/home" />
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/staff"
              component={() => <Staff />}
            />
            <Route
              path="/departments"
              component={() => (
                <Departments department={this.props.department} />
              )}
            />
            <Route
              path="/salary"
              component={() => <Salary staff={this.props.staffs} />}
            />
            <Route path="/staff/:id" render={StaffId} />
            <Route path="/search/:value" render={SearchVal} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

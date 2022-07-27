import React, { Component } from "react";
import StaffDetail from "../components/StaffdetailComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "../components/StaffsListComponent";
import { Switch, Route } from "react-router-dom";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";

class Main extends Component {
  // Nen khai bao dau vao du lieu va state o ham Main , khong nen dung o ham staff hay ham depmarnt
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
  }
  
 
  // Viet cai ham StaffDetail 
    // Muc dich cai nay la truyen cai chi tiet nhan vien co chinh xác id vao ham  StaffDetail
 render() {
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={this.state.staffs.find(
            (staff) => staff.id === +match.params.id
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <div className="container">

        <Switch>
          <Route
            exact
            path="/"
            component={() => <StaffList staff={this.state.staffs} />}
          />
          <Route
            exact
            path="/staff"
            component={() => <StaffList staff={this.state.staffs} />}
          />
          <Route
            exact
            path="/staff"
            component={() => <StaffId staff={this.state.staffs} />}
          />
          <Route exact path="/staff/:id" component={StaffId} />
          <Route
            exact
            path="/department"
            component={() => <Department department={this.state.department} />}
          />
          <Route
            path="/salary"
            component={() => <SalaryTable staffList={this.state.staffs} />}
          />
        </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Main;

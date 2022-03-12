import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import StaffDetail from './DishdetailComponent';
import Department from './departmentcomponents';
import Salary from './salarycomponents';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStaffs,fetchDepartments, postStaffs, deleteStaff} from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs())},
  fetchDepartments: ()=> {dispatch(fetchDepartments())},
  postStaffs: (name,doB,startDate,departmentId,salaryScale,overTime,annualLeave) => dispatch(postStaffs(name,doB,startDate,departmentId,salaryScale,overTime,annualLeave)),
  deleteStaff:(id)=> {dispatch(deleteStaff(id))}
});

class Main extends Component{
  componentDidMount() {  // chạy khi render lần đầu tiên 
  this.props.fetchStaffs();
  this.props.fetchDepartments();
  }
  
  render(){

    const staffsWithId = ({match}) => {
      
      return(
          <StaffDetail staff={this.props.staffs.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId,10))[0]} 
              department ={this.props.departments.departments}
              deleteStaff = {this.props.deleteStaff}
             />
      );
    };
    const DepartmentwId = ({match}) => { 
      const department = this.props.departments.departments.filter((department)=>department.name===match.params.departmentId)[0];
      return(
          <Menu staffs={this.props.staffs.staffs.filter((staffs) => staffs.departmentId === department.id)} postStaffs ={this.props.postStaffs}
             />
      );
      }
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/menu' component={() => <Menu staffs={this.props.staffs.staffs} postStaffs ={this.props.postStaffs}/>} />
              <Route path='/menu/:staffsId' component={staffsWithId} />
              <Route exact path='/department' component={() => <Department department={this.props.departments.departments}/> }/>
              <Route path='/department/:departmentId' component={DepartmentwId} />
              <Route exact path='/salary' component={() => <Salary staffs={this.props.staffs.staffs} allItem ={true}/>} />
              <Redirect to="/menu" />
          </Switch>
           <Footer/>
      </div>
    );

  }
  
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
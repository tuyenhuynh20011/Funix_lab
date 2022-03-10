import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import StaffDetail from './DishdetailComponent';
import Department from './departmentcomponents';
import Salary from './salarycomponents';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStaffs,fetchDepartments} from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  }
}
const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs())},
  fetchDepartments: ()=> {dispatch(fetchDepartments())},
  
});

class Main extends Component{
  componentDidMount() { 
  this.props.fetchStaffs();
  this.props.fetchDepartments();
  }
  //constructor(props) {
   // super(props);
  //  this.callbackFunction =this.callbackFunction.bind(this);
 // }

  

  callbackFunction = (childData) => {
    //const newList = this.props.staffs;
    //const id = this.props.staffs.length;
   
  //   const nhan_vien_moi ={
  //           id: id,
  //           name: childData.username,
  //           doB: childData.doB,
  //           salaryScale: childData.salaryScale,
  //           startDate: childData.startDate,
  //           department:childData.department,
  //           annualLeave: childData.annualLeave,
  //           overTime: childData.overTime,
  //           image: '/assets/images/alberto.png',
  //   }
  //   if (childData.department ==='Sale')
  //   nhan_vien_moi.department = this.props.department[0];
  // else if (childData.department ==='HR')
  // nhan_vien_moi.department = this.props.department[1];

  // else if (childData.department ==='Marketing')
  // nhan_vien_moi.department = this.props.department[2];
  // else if(childData.department ==='IT')
  // nhan_vien_moi.department = this.props.department[3];
  // else 
  // nhan_vien_moi.department = this.props.department[4];
    
  //   newList.push(nhan_vien_moi);
  //   this.setState({
  //     staffs: newList
  //   });
}
  render(){

    const staffsWithId = ({match}) => {
      if (this.props.staffs.staffs.length >parseInt(match.params.staffsId,10)){
      return(
          <StaffDetail staff={this.props.staffs.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId,10))[0]} 
              department ={this.props.departments.departments}
             />
      );
      }
      else{
        return(
          <h3>lỗi</h3>
        )
      }
    };
    const DepartmentwId = ({match}) => { 
      const department = this.props.departments.departments.filter((department)=>department.name===match.params.departmentId)[0];
      return(
          <Menu staffs={this.props.staffs.staffs.filter((staffs) => staffs.departmentId === department.id)}
             />
      );
      }
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/menu' component={() => <Menu staffs={this.props.staffs.staffs} parentCallback = {this.callbackFunction}/>} />
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
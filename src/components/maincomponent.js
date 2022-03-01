import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import DishDetail from './DishdetailComponent';
import Department from './departmentcomponents';
import Salary from './salarycomponents';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    department: state.department,
  }
}
class Main extends Component{
  constructor(props) {
    super(props);
    this.callbackFunction =this.callbackFunction.bind(this);
  }

  

  callbackFunction = (childData) => {
    console.log(childData.department === 'Sale');
    const newList = this.props.staffs;
    const id = this.props.staffs.length;
   
    const nhan_vien_moi ={
            id: id,
            name: childData.username,
            doB: childData.doB,
            salaryScale: childData.salaryScale,
            startDate: childData.startDate,
            department:childData.department,
            annualLeave: childData.annualLeave,
            overTime: childData.overTime,
            image: '/assets/images/alberto.png',
    }
    if (childData.department ==='Sale')
    nhan_vien_moi.department = this.props.department[0];
  else if (childData.department ==='HR')
  nhan_vien_moi.department = this.props.department[1];

  else if (childData.department ==='Marketing')
  nhan_vien_moi.department = this.props.department[2];
  else if(childData.department ==='IT')
  nhan_vien_moi.department = this.props.department[3];
  else 
  nhan_vien_moi.department = this.props.department[4];
    
    newList.push(nhan_vien_moi);
    this.setState({
      staffs: newList
    });
}
  render(){
    console.log(this.state);
    const staffsWithId = ({match}) => {
      if (this.props.staffs.length >parseInt(match.params.staffsId,10)){
      return(
          <DishDetail staff={this.props.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId,10))[0]} 
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
      return(
          <Salary staffs={this.props.staffs.filter((staffs) => staffs.department.name === match.params.departmentId)}
            allItem ={0} id = {match.params.departmentId}
             />
      );
      }
  
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/menu' component={() => <Menu staffs={this.props.staffs} parentCallback = {this.callbackFunction}/>} />
              <Route path='/menu/:staffsId' component={staffsWithId} />
              <Route exact path='/department' component={() => <Department department={this.props.department}/> }/>
              <Route path='/department/:departmentId' component={DepartmentwId} />
              <Route exact path='/salary' component={() => <Salary staffs={this.props.staffs} allItem ={1}/>} />
              <Redirect to="/menu" />
          </Switch>
           <Footer/>
      </div>
    );

  }
  
}
export default withRouter(connect(mapStateToProps)(Main));
import React, {Component} from 'react';
import Menu from './MenuComponent';
import {STAFFS} from '../shared/staffs';
import {DEPARTMENTS} from '../shared/staffs';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import DishDetail from './DishdetailComponent';
import Department from './departmentcomponents';
import Salary from './salarycomponents';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };  
    
  }
  
  render(){
    
    const staffsWithId = ({match}) => {
      if (this.state.staffs.length >parseInt(match.params.staffsId,10)){
      return(
          <DishDetail staff={this.state.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId,10))[0]} 
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
          <Salary staffs={this.state.staffs.filter((staffs) => staffs.department.name === match.params.departmentId)}
            allItem ={0} id = {match.params.departmentId}
             />
      );
      }
  
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/menu' component={() => <Menu staffs={this.state.staffs} />} />
              <Route path='/menu/:staffsId' component={staffsWithId} />
              <Route exact path='/department' component={() => <Department department={this.state.department}/> }/>
              <Route path='/department/:departmentId' component={DepartmentwId} />
              <Route exact path='/salary' component={() => <Salary staffs={this.state.staffs} allItem ={1}/>} />
              <Redirect to="/menu" />
          </Switch>
           <Footer/>
      </div>
    );

  }
  
}

export default Main;
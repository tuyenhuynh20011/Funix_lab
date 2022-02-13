import React, {Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {STAFFS} from '../shared/staffs';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      staffs: STAFFS,
    };  
    
  }
  
  render(){
    
    const staffsWithId = ({match}) => {
      console.log(parseInt(match.params.staffsId,10));
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
  
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/menu' component={() => <Menu staffs={this.state.staffs} />} />
              <Route path='/menu/:staffsId' component={staffsWithId} />
              <Route exact path='/contactus' component={Contact}/>
              <Redirect to="/menu" />
          </Switch>
           <Footer/>
      </div>
    );

  }
  
}

export default Main;
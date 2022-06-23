import Menu from './MenuComponents'
import React,{Component} from 'react'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponents'
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes:DISHES,
      selectedDish:null
    }
  }
  
//   onDishSelect(dishId) {
//     this.setState({selectedDish:dishId})
// }
  render() {
    const HomePage=() =>{
      return(
        <Home />
      )
    }
    return (
      <div>
            <Header />
              <Switch>
                <Route path='/home' component={HomePage}/>
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />}/>
                <Redirect to='/home'/>
              </Switch>
            {/* <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onDishSelect(dishId)}
            /> */}
            {/* <DishDetail 
            dish={this.state.dishes.filter(dish => dish.id===this.state.selectedDish)} /> */}
            <Footer />
      </div>
    );
  }
}

export default Main;

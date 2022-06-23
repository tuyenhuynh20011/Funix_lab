import './App.css';
import React,{Component} from 'react'
import Main from './components/MainComponents';
import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Main />        
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchCats from './actions/catActions'
class App extends Component {   
  
  render() {
    
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

export default App


import React, { Component } from 'react';
import {connect} from 'react-redux';
class App extends Component {   

  state = {
    cats: []
  }
  
  render() {
    
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  this.setState({
    
  })

}

export default connect()(App)


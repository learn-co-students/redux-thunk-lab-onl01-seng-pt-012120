import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList';
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}


function mapStateToProps(state){
  return { cats: state.cats }
}

function mapDispatch(d) {
  return { 
    fetchCats: () => d(fetchCats())
  }
}
 
export default connect(mapStateToProps, mapDispatch)(App)


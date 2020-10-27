import React, { Component } from 'react';
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }   

  render() {
    console.log(this.props.catPics)
    const { catPics, loading } = this.props
    return (
      <div>
        <h1>CatBook</h1>
        {!loading ? <CatList catPics={catPics} /> : 'Loading!'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
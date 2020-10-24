import React, { Component } from 'react';
import App from './App';

class CatList extends Component {
  render(){
    
    const cats = this.props.catPics.map((pic, index) => <img key={index} src={pic.url} alt={`cat-${index}`} />)
    return(
      <div>
       {cats}
      </div>
    )
  }
}

export default CatList;

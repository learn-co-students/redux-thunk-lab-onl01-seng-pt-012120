import React, { Component } from 'react';

class CatList extends Component {
 
  render() {
    

    return(
      <div>
        {this.props.catPics.map(picture => <img src={picture.url} key={picture.id} alt={picture.id}></img>)}
      </div>
    );}

    }



export default CatList;
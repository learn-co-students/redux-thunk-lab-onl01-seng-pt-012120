// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {

  render() {
    const { catPics } = this.props

    return(
      <div>
        <h2>The Cat List</h2>
        {catPics.map(cat => <img key={cat.id} src={cat.url} alt="cat-from-tumblr" width='45%' height='auto' />)}
      </div>
    )
  }
}

export default CatList
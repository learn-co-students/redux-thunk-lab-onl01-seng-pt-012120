import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const cats = this.props.catPics.map(cat => <li key={cat.id}><img src={cat.url} alt={cat.id} /></li>);
     
        return(
          <div>
            {cats}
          </div>
        );
      }
};

export default CatList
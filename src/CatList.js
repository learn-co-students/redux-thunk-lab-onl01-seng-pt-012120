import React, {Component} from 'react';

export default class CatList extends Component {
    renderCats = () => {
        return this.props.catPics.map(c => <div><img src={c.url}></img></div>)
    }

    render() {
        return(
            <div>
                {this.renderCats()}
            </div>
        )
    }
}

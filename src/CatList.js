import React, { Component } from 'react'

export default class CatList extends Component {
    renderPics = () => {
        this.props.catPics.images.map( pic => <img src={pic.url} alt=''/>)
    }
    
    render() {
        return (
            <div>
                {this.props.catPics.map( pic => <img key={pic.id} src={pic.url} alt=''/>)}
            </div>
        )
    }
}

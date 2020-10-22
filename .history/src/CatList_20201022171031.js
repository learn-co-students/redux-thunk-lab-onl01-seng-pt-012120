import React, {Component} from 'react';

class CatList extends Component {

    render(){
        const {catPics} = this.props

        return(
            <div>
                {catPics.map(cat=>{return(<img src={cat.url}></img>)})}
            </div>
        )
    }
}

export default CatList;
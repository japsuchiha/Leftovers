import React, { Component } from 'react';

export default class MoreInfo extends Component{
    render(){
        console.log(this.props.recipe)
        console.log(this.props.id);
        console.log(this.props.objId)
        if(this.props.id == this.props.objId){
            console.log(this.props.id === this.props.objId)
        return(
            <p>{this.props.recipe}</p>
        )
    }
    else{return(
        <p></p>)}
}
}
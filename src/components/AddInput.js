import React, { Component } from 'react';
export default class AddInput extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = (e) =>{
        e.preventDefault();
        let val = e.target.option.value;
        val = val.replace(',',"%2C")
        this.props.getData(val);
        e.target.option.value = ""
    }
    render(){
        return(
            <div>
            <h1>Whats in your fridge!</h1>
            <form onSubmit={this.handleInput}>
            <input className="fridge-input" type="text" placeholder="ingredients seperated by ," name="option"/>
            <button className="button is-primary">Get Recipes!</button>
            </form>
            </div>
        )
    }
}


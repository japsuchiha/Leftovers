import React, { Component } from 'react';
export default class AddInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients : []
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = (e) =>{
        e.preventDefault();
        let val = e.target.option.value;
        this.props.handleInputOption(val);
        this.setState((prevState)=>{
            prevState.ingredients.push(val);
            return({
            ingredients : prevState.ingredients
            })
        })
        console.log(this.state)
    }
    render(){
        return(
            <div>
            <h1>Whats in your fridge!</h1>
            <form onSubmit={this.handleInput}>
            <input className="fridge-input" type="text" placeholder="enter ingridients" name="option"/>
            <button className="button is-primary">Get Recipes!</button>
            </form>
            </div>
        )
    }
}


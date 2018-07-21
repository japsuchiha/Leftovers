
import React, { Component } from 'react';
export default class EnterCalorie extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>{
        e.preventDefault();
        let val = e.target.calorie.value;
        val = val.replace(',',"%2C")
        this.props.getData(val);
        e.target.calorie.value = ""
    }
    render(){

        return(
            <div>
                <h1>Tell us your Calorie Intake!</h1>
                <h3>We will recommend the best meal plan</h3>
                <form onSubmit={this.handleChange}>
                <input className="calorieInput" type="text" placeholder="enter calories" name="calorie"/>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import RecipeData from './RecipeData';
let stuff= [];
export default class MealData extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipe : []
        }
        // this.getInfo = this.getInfo.bind(this)
    }
    render(){
        console.log(this.props.data)
            return(
                <RecipeData data={this.props.data}/>
                )
            }
        }
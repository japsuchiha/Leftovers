import React, { Component } from 'react';

export default class MealData extends Component{
    render(){
        console.log(this.props.data);
        if(this.props.data){
            return(
                this.props.data.meals.map((obj)=>{
                    return(
                        <li key={obj.id}>{obj.title}</li>
                    )}))}
        else{
            return(
                <div></div>
            )}}};
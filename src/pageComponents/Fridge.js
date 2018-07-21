
import React, { Component } from 'react';
import AddInput from '../components/AddInput';
import DataOut from '../components/DataOut';

export default class Fridge extends Component {
    constructor(props){
        super(props);
        this.state={
            parameters :[]
        }
    }
    handleInputOption = (option) =>{
        this.setState((prevState)=>{
            prevState.parameters.push(option);
            return(
                {
                    parameters : prevState.parameters
                }
            )
        })
        console.log(this.state);
    }
    render(){
      return(
        <div>
        <AddInput handleInputOption={this.handleInputOption}/>
        <DataOut/>
        </div>
      )
    }
  }
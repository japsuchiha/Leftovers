import React, { Component } from 'react';

export default class DataOut extends React.Component{
    render(){
        console.log(this.props.data)
       if(this.props.data){
           return(
                this.props.data.map((obj)=>{
                    return(
                        <li key={obj.id}>{obj.title}</li>
                    )}))}
       else{
           return(
               <p></p>
           )}}};
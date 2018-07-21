
import React, { Component } from 'react';
import AddInput from '../components/AddInput';
import DataOut from '../components/DataOut';



export default class Fridge extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : ""
        }
        this.getData = this.getData.bind(this);
    }

   getData(ingredients){
    let key = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
    let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
    let header = new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": key,
        "X-Mashape-Host": host
    });
        let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&ranking=1`
        let req = new Request(url,{
            method: 'GET',
            headers: header
        })

        fetch(req)
        .then((response)=>(
            response.json()
        )).then((json)=>{
            this.setState(()=>{
                return{
                    data: json
                }
            })
        })    
   }
    render(){
      return(
        <div>
        <AddInput getData ={this.getData}/>
        <DataOut data={this.state.data}/>
        </div>
      )
    }
  }
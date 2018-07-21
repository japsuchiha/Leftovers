import React, { Component } from 'react';
import EnterCalorie from '../components/EnterCalorie'
import MealData from '../components/MealData';

export default class Meal extends Component {
  constructor(props){
    super(props);
    this.state = {
        data : ""
    }
    this.getData = this.getData.bind(this);
}

getData(calories){
let key = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
let header = new Headers({
    'Accept':'application/json',
    "X-Mashape-Key": key,
    "X-Mashape-Host": host
});
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?targetCalories=${calories}&timeFrame=day`
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
        <EnterCalorie getData={this.getData}/>
        <MealData data={this.state.data}/>
        </div>
      )
    }
  }
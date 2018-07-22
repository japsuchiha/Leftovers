import React, { Component } from 'react';


export default class MealData extends Component{
    state = {
        recipe : []
    }
    getInfo(id){
        let stuff= "";
        let key = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
        let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
        let header = new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": key,
        "X-Mashape-Host": host
    });
        let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`
        let req = new Request(url,{
        method: 'GET',
        headers: header
    })
    fetch(req)
    .then((response)=>(
        response.json()
    )).then((json)=>{
        this.setState((prevState)=>{
            return{
                recipe:prevState.recipe.push(json.instructions)
            }
        })
    }) 
    }
    render(){
        let count =0 ;
        console.log(this.props.data);
        if(this.props.data){
            this.props.data.meals.map((obj)=>{
                this.getInfo(obj.id);
            })
            return(
                this.props.data.meals.map((obj)=>{
                    return(
                    <div className="card" key={obj.title}>
                    <div className="card-content">
                    <div className="content title is-5">
                    {obj.title}
                    </div>
                    <div className="info">
                    <p>{this.state.recipe[count]}</p>
                    </div>
                    </div>
                    </div>
                    )
                    count++}))}
        else{
            return(
                <div></div>
            )}}};
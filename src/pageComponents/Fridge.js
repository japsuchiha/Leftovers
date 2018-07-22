
import React, { Component } from 'react';
import AddInput from '../components/AddInput';
import DataOut from '../components/DataOut';
import '../styles/components/fridge.css'


export default class Fridge extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : "",
            recipe: ""
        }
        this.getData = this.getData.bind(this);
    }

//    getInfo(id){
//     let key = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
//     let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
//     let header = new Headers({
//         'Accept':'application/json',
//         "X-Mashape-Key": key,
//         "X-Mashape-Host": host
//     });
//         let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`
//         let req = new Request(url,{
//             method: 'GET',
//             headers: header
//         })

//         fetch(req)
//         .then((response)=>(
//             response.json()
//         )).then((json)=>{
//             this.setState(()=>{
//                 return{
//                     recipe: json
//                 }
//             })
//         })
//    }    
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
        <div className="my-container">
        <AddInput getData ={this.getData}/>
        <DataOut data={this.state.data} getInfo={this.getInfo} recipe={this.state.recipe}/>
        </div>
      )
    }
  }
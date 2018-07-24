import React, { Component } from 'react';
import MoreInfo from './MoreInfo';
import '../styles/components/meal.css'
let time="";
export default class RecipeData extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipe:"",
            id : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        console.log("hey");
        let id = e.target.value;
        console.log(id)
        let key = "ngB7EZUOW8mshVBnwFLNumeBNMD7p17zEBUjsnZm4CLj5Ninzx";
        let key2 = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
        let key3 = "TpPgamKk1zmshAZmlxeAa4IpK6Q8p1BaZqIjsnizY5rkJy81rK";
        let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
        let header = new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": key2,
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
        this.setState(()=>{
            return{
                recipe: json.instructions,
                id: id
            }
        })
    })
    }

    render(){
        console.log("rendering")
        if(this.props.data){
            console.log(this.props.data);
            return(
                this.props.data.meals.map((obj,index)=>{
                    if(index===0)
                        time = <div className="tag is-success time">Morning</div>
                    if(index===1)
                        time = <div className="tag is-success time">Afternoon</div>
                    if(index===2)
                        time = <div className="tag is-success time">Night</div>
                    return(
                    <div className="card" key={obj.title}>
                    <div className="card-content">
                    <div className="content title is-5">
                    {time}
                    <div>{obj.title}</div>
                    </div>
                    <div className="info">
                        <option  className="more tag" onClick={this.handleChange} value={obj.id}>Get Recipe!</option>
                        <option className="tag ready"> Ready in : {obj.readyInMinutes} min</option>
                        <MoreInfo recipe={this.state.recipe} id={this.state.id} objId ={obj.id}/>
                    </div>
                    </div>
                    </div>
                    )
                    })
                )
                }
                else{
                    return(
                        <p></p>
                    )
                }
    }
}
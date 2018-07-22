import React, { Component } from 'react';
import '../styles/components/fridge.css'
export default class DataOut extends React.Component{
    state = {
        recipe: ""
    }
    render(){
        console.log(this.props.data)
       if(this.props.data){
        return(
            this.props.data.map((obj)=>{
    //             let stuff= "";
    //             let key = "M3VXrC1jhUmshKUT8csJaRthqGvMp19tRj1jsnNuuOUlueBjxB";
    //     let host = "spoonacular-recipe-food-nutrition-v1.p.mashape.com";
    // let header = new Headers({
    //     'Accept':'application/json',
    //     "X-Mashape-Key": key,
    //     "X-Mashape-Host": host
    // });
    //     let url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${obj.id}/information`
    //     let req = new Request(url,{
    //         method: 'GET',
    //         headers: header
    //     })

    //     fetch(req)
    //     .then((response)=>(
    //         response.json()
    //     )).then((json)=>{
    //         this.setState(()=>{
    //             return{
    //                 recipe:json
    //             }
    //         })
    //     }) 
                return(
                    <div className="card" key={obj.id}>
                    <div className="card-image">
                    <figure className="image">
                    <img src={obj.image}/>
                    </figure>
                    </div>
                    <div className="card-content">
                    <div className="content title is-5">
                    {obj.title}
                    {this.state.recipe.instructions}
                    </div>
                    </div>
                    </div>
                )
            })
        )}
       else{
           return(
               <p></p>
           )}
    
}};

//            {id: 761087, title: "Tomato Marmalade with Blood Oranges", image: "https://spoonacular.com/recipeImages/761087-312x231.jpg", imageType: "jpg", usedIngredientCount: 2, …}
// 1
// :
// {id: 27719, title: "Dr. Oz’s Vitamin C Smoothie", image: "https://spoonacular.com/recipeImages/27719-312x231.jpg", imageType: "jpg", usedIngredientCount: 2, …}
// 2
// :
// {id: 573957, title: "Green Tomato Marmalade", image: "https://spoonacular.com/recipeImages/573957-312x231.jpg", imageType: "jpg", usedIngredientCount: 2, …}
// 3
// :
// {id: 4812, title: "Slow-roasted Salmon", image: "https://spoonacular.com/recipeImages/4812-312x231.jpg", imageType: "jpg", usedIngredientCount: 2, …}
// 4
// :
// {id: 108555, title: "Tomato Marmalade", image: "https://spoonacular.com/recipeImages/108555-312x231.jpg", imageType: "jpg", usedIngredientCount: 2, …}
// length
// :
// 5
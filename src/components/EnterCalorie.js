
import React, { Component } from 'react';
export default class EnterCalorie extends Component{
    constructor(props){
        super(props);
        this.state ={
            calorie : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>{
//         For men:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) + 5
// For women:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) - 161
        e.preventDefault();
        let age = e.target.elements.age.value;
        let gender = e.target.elements.gender.value;
        let feet = e.target.elements.feet.value * 12 * 2.54;
        let inches = e.target.elements.inches.value * 2.54;
        let cm = feet + inches;
        let weight = e.target.elements.weight.value;
        let excer = e.target.elements.activity.value;
        let calorie = 0;
        if(gender.toLowerCase()==="female"){
            calorie = (10 * weight + 6.25 * cm - 5 * age - 161)*excer;
        }
        else{
            calorie = (10 * weight + 6.25 * cm - 5 * age + 5)*excer;
        }
        console.log(calorie)
        calorie = Math.floor(calorie)
        console.log(calorie)
       this.props.getData(calorie);
       this.setState(()=>{
           return(
               {calorie: calorie}
           )
       })
    }
    render(){

        return(
            <div className="form-control">
                <form onSubmit={this.handleChange} className="container">
                <div className="columns">
                <div className="column">
                <label className="label">Age</label>
                <input className="age input" type="text" placeholder="enter age" name="age"/>
                </div>
                <div className="column">
                <label className="label">Gender</label>
                <div className="select">
                <select name="gender">
                <option>Female</option>
                <option>Male</option>
                </select>
                </div>
                </div>
                </div>
                <div className="height">
                <label className="label">Height</label>
                <input className="height-feet input" type="text" placeholder="feets" name="feet"/>
                <input className="height-inches input" type="text" placeholder="inches" name="inches"/>
                </div>
                <div className="columns">
                <div className="column">
                <label className="label">Weight</label>
                <input className="weight input" type="text" placeholder="kgs" name="weight"/>
                </div>
                <div className="column">
                <label className="label">Activity</label>
                <div className="select">
                <select name="activity">
                <option value ="1">None</option>
                <option value = "1.2">Little</option>
                <option value="1.375">1-3 times/week</option>
                <option value="1.55">3-5 times/week</option>
                <option value="1.725">6-7 times/week</option>
                <option value="1.9">physical job/ very hard</option>
                </select>
                </div>
                </div>
                </div>
                <button type="submit" className="calculate button is-primary">Get Meals</button>
                {this.state.calorie && <input className="input" type="text" placeholder={`Calories : ${this.state.calorie}`} readOnly/>}
                </form>
            </div>
        )
    }
}

// {id: 763369, title: "Healthy Yummy Mexican Breakfast Bowls", readyInMinutes: 35, servings: 2, image: "healthy-yummy-mexican-breakfast-bowls-763369.jpg", …}
// 1
// :
// {id: 801738, title: "Pear & Walnut Burger", readyInMinutes: 45, servings: 4, image: "pear-walnut-burger-801738.jpg", …}
// 2
// :
// {id: 741233, title: "Eggplant Timballo with Cavatelli", readyInMinutes: 90, servings: 6, image: "eggplant-timballo-with-cavatelli-741233.jpeg", …}
// length
// :
// 3
// __proto__
// :
// Array(0)
// nutrients
// :
// {calories: 2560.21, protein: 126.36, fat: 144.55, carbohydrates: 197.42}
// __proto__
// :
// Object

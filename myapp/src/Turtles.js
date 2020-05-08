import React, { Component } from 'react';
import './turtles.css';

const Turtles = ({ turtles, deleteTurtle }) => {
    const turtleList = turtles.map(turtle => {
        if(turtle.age < 100){
            return(
                <div key= { turtle.id }>
                    <div>{ turtle.name } </div>
                    <div>{ turtle.age } </div>
                    <div>{ turtle.mask } </div>
                    <button onClick={() => deleteTurtle(turtle.id) }>Delete Turtle</button>
                </div>
            )
        }else{
            return null;
        }
    })
    return (
        <div>{ turtleList } </div>
    )
}

export default Turtles;




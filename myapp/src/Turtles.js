import React, { Component } from 'react';

const Turtles = ({ turtles }) => {
    const turtleList = turtles.map(turtle => {
        if(turtle.mask === 'Red'){
            return(
                <div key= { turtle.id }>
                    <div>{ turtle.name } </div>
                    <div>{ turtle.age } </div>
                    <div>{ turtle.mask } </div>
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




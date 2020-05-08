import React, { Component } from 'react';

class AddTurtle extends Component {
    state = {
        name: null,
        age: null,
        mask: null
    }
    handleStateChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTurtle(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleStateChange} />

                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleStateChange} />

                    <label htmlFor="mask">Mask:</label>
                    <input type="text" id="mask" onChange={this.handleStateChange}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTurtle;
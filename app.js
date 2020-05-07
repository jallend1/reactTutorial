class App extends React.Component {
    state = {
        name: 'Jason',
        age: 39
    }
    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    handleClick = e => {                                                                // Arrow functions bind this to the component
        if(this.state.name === 'Jason'){
            this.setState({
                name: 'Paula',
                age: 38
            });
        }else{
            this.setState({
                name: 'Jason',
                age: 39
            });
        }
    }                             
    handleCopy = e => console.log('Quit stealing my content.');                         
    handleHover = e => console.log(e);
    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }
    render() {
        return (
            <div>
                <p>Here's some state data: { this.state.name } is { this.state.age } years old. </p>
                <button onClick={ this.handleClick  }>Click me, bro.</button>
                <button onMouseOver= { this.handleHover }>Hover me, bro.</button>
                <p onCopy={ this.handleCopy }>What we think, we become.</p>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" onChange={ this.handleChange } />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
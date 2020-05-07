class App extends React.Component {
    state = {
        name: 'Jason',
        age: 39
    }
    handleClick(e){
        console.log(e.target);
    }
    handleCopy(e){
        console.log('Quit stealing my content.');
    }
    handleHover(e){
        console.log(e)
    }
    render() {
        return (
            <div>
                <h1>Hi.</h1>
                <p>Here's a random number for your enjoyment: { Math.floor(Math.random() * 100) }</p>
                <div>
                    <p>Here's some state data: { this.state.name } is { this.state.age } years old. </p>
                    <button onClick={ this.handleClick  }>Click me, bro.</button>
                    <button onMouseOver= { this.handleHover }>Hover me, bro.</button>
                    <p onCopy={ this.handleCopy }>What we think, we become.</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
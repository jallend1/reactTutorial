class Rando extends React.Component {
    render(){
        return (
            <div>
                <h1>Hi.</h1>
                <p>Here's a random number for your enjoyment: { Math.floor(Math.random() * 100) }</p>
            </div>
        )
    }
}
ReactDOM.render(<Rando />, document.querySelector('#rando'));
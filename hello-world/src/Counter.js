import { Component } from 'react';
import "./App.css";

class Counter extends Component {
    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div className="App-Content">
                <b>Counter</b> - Value: {this.state.number}
                <br />
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
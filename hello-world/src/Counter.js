import { Component } from 'react';
import "./App.css";

// Error Handling, similar to Exceptions in Java
const Problem = () => {
    throw (new Error('Shoot! There\'s an error'));
};

class Counter extends Component {
    state = {
        number: 0
    }
    
    // Component Test (LifeCycle API)
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');

        // Will not rerender when 'number' of next state is a multiple of 5
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate (deprecated)');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidU[date')
    }

    // Component for Catching Error in Render
    componentDidCatch(error, info) {
        this.setState({
          error: true
        });
    }

    // Real Number Handling Code
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
        // Code to shoot error message to clients
        if (this.state.error) return (<h1>Error! Error!</h1>);

        // Code to handle typical exceptions when using object or array
        // if (!this.props.object || !this.props.array || this.props.array.length === 0) return null;
        // Bugs still not caught with this statement should be handled by 'componentDidCatch'

        return (
            <div>
                <b>Counter</b> - Value: {this.state.number}

                {/* Shoot Error when number is 4*/}
                {this.state.number === 4 && <Problem />}

                <br />
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
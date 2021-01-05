import { Component } from 'react';
import './App.css';

class MyName extends Component {
    static defaultProps = {
        name: 'Default'
    };

    render() {
        return (
            <div>
                Hello! My name is <b>{this.props.name}</b>.
            </div>
        )
    };
}

export default MyName;
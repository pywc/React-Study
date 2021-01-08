// Component for Phonebook entry form

import { Component } from 'react';

class Phoneform extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            // [e.target.name] indicates all input with name prop
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // Prevent Page Reloading
        e.preventDefault();
        // Deliver State to Parent (App.js) via onCreate
        this.props.onCreate(this.state);
        // Reset Form
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <br />
                <input
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <br />
                <button type="submit">Submit</button>
                <hr />
                <div>
                    <b>Name:</b> {this.state.name}
                    <br />
                    <b>Phone:</b> {this.state.phone}
                </div>
            </form>
        );
    }
}

export default Phoneform;
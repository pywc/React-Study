import { Component } from 'react';
import './Phoneform.css';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
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
                        <button className="create-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Phoneform;
// Component for showing a Phonebook entity

import { Component } from 'react';
import './PhoneInfo.css';

class PhoneInfo extends Component {
    // For handling error in blank info
    static defaultProps = {
        info: {
            id: 0,
            name: 'Name',
            phone: '010-0000-0000'
        }
    }

    // For edit
    state = {
        // true when edit button is clicked
        editing: false,
        name: '',
        phone: ''
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;

        // call onRemove from App.js (delivered via props)
        onRemove(info.id);
    }

    // edit toggle
    handleEditState = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // called when onEdit event in input
    handleEdit = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    // called when edit, same as in Phone
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    // the logic when editing toggle is changed
    componentDidUpdate(prevProps, prevState) {
        const { info, onEdit } = this.props;

        if (!prevState.editing && this.state.editing) {
            // when editing turns false -> true
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            // when editing turns true -> false
            // call onEdit from App.js (was delivered by prop)
            onEdit(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    // for efficiency; without this, previous entries will be rerendered 
    // every time when an entry is added, edited, or removed.
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing // if edit is complete
            && !nextState.editing // if edit is toggled
            && nextProps.info === this.props.info) { // if next props equal this props
            return false;
        }

        return true;
    }

    render() {
        // to check if rendered only when needed
        console.log("PhoneInfo.js " + this.props.info.id + " rendered");

        const {
            name, phone
        } = this.props.info;

        const { editing } = this.state;

        if (editing) {
            return (
                <div className="list">
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
                    <br />
                    <button className="buttons" onClick={this.handleEditState}>Update</button>
                    <button className="buttons" onClick={this.handleRemove}>Remove</button>
                </div>
            );
        }

        return (
            <div className="list">
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <br />
                <button className="buttons" onClick={this.handleEditState}>Edit</button>
                <button className="buttons" onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

export default PhoneInfo;
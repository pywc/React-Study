// Component for showing a Phonebook entity

import { Component } from 'react';

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

    // the logic when editing is changed
    componentDidUpdate(prevProps, prevState) {
        const { info, onEdit } = this.props;

        if(!prevState.editing && this.state.editing) {
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

    render() {
        // Box style
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            id, name, phone
        } = this.props.info;

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
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
                    <button onClick={this.handleEditState}>Update</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            );
        }

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleEditState}>Edit</button>
                <button onClick={this.handleRemove}>Remove</button>
            </div>
        );
    }
}

export default PhoneInfo;
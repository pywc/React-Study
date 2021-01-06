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

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;
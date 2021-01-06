// Shows multiple PhoneInfo components

import { Component } from 'react';
import PhoneInfo from './PhoneInfo.js';

class PhoneInfoList extends Component {
    // Error Handling for null value
    static defaultProps = {
        data: []
    }

    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo key={info.id} info={info} />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
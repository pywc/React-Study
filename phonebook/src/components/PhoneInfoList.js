// Shows multiple PhoneInfo components

import { Component } from 'react';
import PhoneInfo from './PhoneInfo.js';

class PhoneInfoList extends Component {
    // Error Handling for null value
    static defaultProps = {
        data: [],
        onRemove: () => console.warn("onRemove not defined"),
        onEdit: () => console.warn("onEdit not defined")
    }

    render() {
        // this.prop = 'information' in App.js
        const { data, onRemove, onEdit } = this.props;

        const list = data.map(
            // info: each entity in 'data'
            // after arrow: new corresponding entity from 'data' to be assigned in 'list'
            // static key value 'id' assigned for efficiency
            info => (
                <PhoneInfo 
                    key={info.id} 
                    info={info} 
                    onRemove={onRemove}
                    onEdit={onEdit}
                />
            )
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
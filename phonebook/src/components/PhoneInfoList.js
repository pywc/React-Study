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

    // For efficiency; without this, PhoneInfoList and its sub-components will be
    // rerendered every single time at search
    // render() only called when this is true
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        // this.prop = 'information' in App.js
        const { data, onRemove, onEdit } = this.props;

        if (data.length === 0) {
            return(
                <div>
                    No entries.
                </div>
            )
        }

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
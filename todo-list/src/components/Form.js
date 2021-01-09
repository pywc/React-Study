import { Component, Fragment } from 'react';
import './Form.css';


class Form extends Component {

    render() {
        const { value, onChange, onCreate, onKeyPress, color } = this.props;

        return (
            <Fragment>
                <div className="form">
                    <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}} />
                    <div className="create-button" onClick={onCreate}>
                        Add
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Form;
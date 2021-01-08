import { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    render() {
        const { id, text, checked, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // prevent onToggle from being executed
                    onRemove(id)
                }}
                >&times;</div>
                <div className={`todo-text ${ checked ? ' checked' : '' }`}>
                    <div>{text}</div>
                </div>
                {
                    checked ? (<div className="check-mark">✓</div>) : ''
                }
            </div>
        );
    }
}

export default TodoItem;
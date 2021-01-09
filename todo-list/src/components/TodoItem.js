import { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {

    // efficiency
    // apparently this causes an error in being updated
    /*
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    */

    render() {
        const { id, text, checked, color, onToggle, onRemove } = this.props;
        let class1 = "todo-item";
        let class2 = "todo-text";
        
        if (checked) {
            class1 += " checked-background";
            class2 += " checked";
        }

        return (
            <div className={class1} onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // prevent onToggle from being executed
                    onRemove(id)
                }}
                >&times;</div>
                <div className={class2} style={{color}}>
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
import { Component, Fragment } from 'react';
import './TodoListTemplate.css'

class TodoListTemplate extends Component {

    render() {
        const { palette, form, children } = this.props;

        return (
            <Fragment>
                <main className="todo-list-template">
                    <div className="title">
                        To-do List
                    </div>
                    <section className="palette-wrapper">
                        {palette}
                    </section>
                    <section className="form-wrapper">
                        {form}
                    </section>
                    <section className="todos-wrapper">
                        {children}
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default TodoListTemplate;

import { Component, Fragment } from 'react';
import TodoListTemplate from './components/TodoListTemplate.js'
import Form from './components/Form.js'
import TodoItemList from './components/TodoItemList.js'

class App extends Component {
  id = 0
  state = {
    input: '',
    todos: [
      /*
       { id: '0', text: ' First todo', checked: false } ,
       { id: '1', text: ' Second todo', checked: true } ,
       { id: '2', text: ' Third todo', checked: false } 
       */
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // next value for input
    });
  }


  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // reset
      todos: todos.concat({ // not 'push', since it still refers to the same ref
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }


  handleKeyPress = (e) => {
    // if pressed key is Enter, call handleCreate
    if (e.key == 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id == id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <Fragment>
        <div>
          <TodoListTemplate form={(
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          )}>
            <TodoItemList 
              todos={todos} 
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          </TodoListTemplate>
        </div>
      </Fragment>
    );
  }
}

export default App;

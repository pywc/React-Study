import { Component, Fragment } from 'react';
import './App.css'
import Phoneform from './components/Phoneform.js';
import PhoneInfoList from './components/PhoneInfoList.js';

class App extends Component {
  id = 0
  state = {
    information: [
      /* Example entry
      {
        id: 0,
        name: 'John Appleseed',
        phone: '010-0000-0000'
      }
      */
    ],
    keyword: ''
  }

  // Entity Create Event Handler
  handleCreate = (data) => {
    const { information } = this.state;

    // tempInfo was put here for crosschecking in console
    // may be more convenient to just put it in the setState statement
    const tempInfo = information.concat(
                            { 
                              id: this.id++, 
                              ...data 
                            }
                      );

    this.setState({
      information: tempInfo
    });

    // To check if array is well fomratted in console
    console.log(JSON.stringify(tempInfo));
  }

  // Entity Remove Event Handler
  handleRemove = (id) => {
    const { information } = this.state;

    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleEdit = (id, data) => {
    const { information } = this.state;

    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data} // create new object and overwrite id and data
          : info // maintain original value
      )
    });
  }

  // for search feature
  handleChange = (e) => {
    this.setState({
        keyword: e.target.value
    });
  }


  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <Fragment>
        <div className='App'>
          Magnificent Phonebook
        </div>
        <div className='App-Content'>
          <Phoneform 
            onCreate={this.handleCreate} 
          />
          <hr />
          <b>Search-</b> 
          <input
            placeholder="Enter Name..."
            onChange={this.handleChange}
            value={keyword}
          />
          <PhoneInfoList 
            data={filteredList}
            onRemove={this.handleRemove}
            onEdit={this.handleEdit}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

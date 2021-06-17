import { Component } from 'react';
import Phoneform from './components/Phoneform.js';
import PhoneInfoList from './components/PhoneInfoList.js';
import './App.css'

class App extends Component {
  id = 0
  state = {
    information: [
      /* Example entry
      {
        id: 0,
        name: 'John Appleseed',
        phone: '000-000-0000'
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

    // search function
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <main className="phonebook-template">
          <div className="title">
            Magnificent Phonebook
          </div>
          <section className="search-wrapper">
            <input
              placeholder="Search Name..."
              onChange={this.handleChange}
              value={keyword}
            />
          </section>
          <section className="form-wrapper">
            <Phoneform 
              onCreate={this.handleCreate} 
            />
          </section>
          <section className="entry-wrapper">
            <PhoneInfoList 
              data={filteredList}
              onRemove={this.handleRemove}
              onEdit={this.handleEdit}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

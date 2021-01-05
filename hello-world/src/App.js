import { Component, Fragment } from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          Hello World!
        </div>
  
        
        <div className="App-Content">
          {/* Component Testing */}
          <MyName name="React" />
          <MyName />
          <hr />
  
          {/* State Testing */}
          <Counter />
        </div>
      </Fragment>
    );
  };
}

export default App;

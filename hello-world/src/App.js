import { Fragment } from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';

function App() {
  return (
    <Fragment>
      <div className="App">
        Hello World!
      </div>

      {/* Component Testing */}
      <MyName name="React" />
      <MyName />
      <Counter />
    </Fragment>
  );
}

export default App;

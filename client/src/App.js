import React from 'react';
import './App.css';
import './tachyons-indigo.css';

import { TextEdit } from './TextEdit';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      filename: 'server/debug.js',
      filedata: ''
    }
  }

  render() {

      return (
        <div className="App">
          <TextEdit filename="server/debug.js"></TextEdit>
          <TextEdit filename="client/src/App.js"></TextEdit>
        </div>
      );
    }
}

export default App;

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
          <TextEdit height="332px" filename="projects/total-react/client/src/App.js"></TextEdit>
          <TextEdit height="470px" filename="projects/urbit/smith/urbit/app/smith.hoon"></TextEdit>
        </div>
      );
    }
}

export default App;

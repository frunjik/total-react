import React from 'react';
import './App.css';
import './tachyons-indigo.css';
import { TextEdit } from './TextEdit';

class App extends React.Component {

    state = {filename: '', filedata: ''}

    render() {
      return (
        <div className="App">
          <TextEdit height="380px" filename="projects/total-react/client/src/App.js"></TextEdit>
          <TextEdit height="120px" filename="projects/total-react/client/src/TextEdit.js"></TextEdit>
          <TextEdit height="200px" filename="projects/urbit/smith/urbit/app/smith.hoon"></TextEdit>
        </div>
      );
    }
}
export default App;

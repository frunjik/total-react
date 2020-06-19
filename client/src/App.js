// works ?ccccaaaasssasdsdsxxxxsssss
import React from 'react';
import './App.css';
import './tachyons-indigo.css';

import { FileSystem } from './fs';

const fs = new FileSystem();

class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      filename: 'server/test.js',
      filedata: ''
    };

    this.loadfile();
  }

  get filename() {
    return this.state.filename;
  }

  get filedata() {
    return this.state.filedata;
  }

	loadfile = event => {
		fs.load(this.filename,
			s => this.setFiledata(s),
			f => this.showError(`Error loading ${this.filename}`)
    );
	}

	savefile = event => {
		fs.save(this.filename, this.filedata,
			s => {},
			f => {},
    );
    event.preventDefault();
    return false;
	}

  showError = s => {
    // TODO
    alert(s);
  };

  setFilename = s => {
    this.setState({ filename: s });
  };

  setFiledata = s => {
    this.setState({ filedata: s });
  };

  onFilenameChange = event => {
    this.setFilename(event.target.value);
  };

  onFiledateChange = event => {
    this.setFiledata(event.target.value);
  };

  render() {

      return (

        <div className="App">

          <div classname="top">
            <div className="flex">
              <div className="outline w-20 pa3 mr2">
                <div
                  onClick={this.loadfile}
                  className="w-80 f6 link dim ph3 pv2 mt2 mb2 dib white bg-black" href="#0">load</div>
              </div>

              <div className="w-60">
                <form className="pa4 black-60 w-100">
                  <div className="mr2">

                    <input className="input-reset ba b--black-20 pa2 mb2 mt1 db w-100"
                      onChange={this.onFilenameChange}
                      value={this.state.filename}
                      id="filename"
                      type="text"
                      aria-describedby="filename-desc"/>
                  </div>
                </form>
              </div>

              <div className="outline w-20 pa3 mr2">
                <div
                  onClick={this.savefile}
                  className="w-80 f6 link dim ph3 pv2 mb2 mt2 dib white bg-black" href="#0">save</div>
              </div>
            </div>
          </div>

          <header className="App-header">

          <form className="pa4 black-80">
            <textarea
              style={{height: '850px'}}
              onChange={this.onFiledateChange}
              value={this.state.filedata}
              id="filedata" name="filedata" className="w-100 h-100 db border-box hover-black ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
          </form>

          </header>

        </div>
      );
    }
}

export default App;

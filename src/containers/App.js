import React, { Component } from 'react';

import NamesList from '../components/NamesList';
import NamesForm from '../components/NamesForm';
import RandomiserDisplay from '../components/RandomiserDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  addName(name){
    this.setState({
      names: [...this.state.names, name]
    })
  }

  render() {
    return (
      <div className="App">
        <NamesForm onButtonClick={ this.addName.bind(this) } />
        <NamesList names={this.state.names}/>
        <RandomiserDisplay />
      </div>
    );
  }
}

export default App;

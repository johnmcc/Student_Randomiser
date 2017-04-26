import React, { Component } from 'react';
import _ from 'lodash';

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

  handleDelete(event) {
    const newNames = this.state.names.filter((x, i) => i.toString() !== event.target.value);
    this.setState({
      names: newNames
    })
  }

  handleStop(name) {
    console.log("Stopped at", name)
  }

  render() {
    return (
      <div className="App">
        <NamesForm onButtonClick={ this.addName.bind(this) } />
        <NamesList 
          names={ this.state.names }
          onClick={ this.handleDelete.bind(this) } />
        <RandomiserDisplay 
          names={this.state.names}
          onStop={this.handleStop}/>
      </div>
    );
  }
}

export default App;

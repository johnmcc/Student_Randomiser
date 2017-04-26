import React, { Component } from 'react';
import _ from 'lodash';

import RandomiserForm from '../components/RandomiserForm';
import RandomiserDisplay from '../components/RandomiserDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      currentName: null
    };
  }

  onNameKeyUp(event){
    let names = event.target.value.split(",").map((name, index) => {return name.trim()});
    this.setState({
      names: names
    });
  }

  start(event){
    event.preventDefault();

    let interval = setInterval(() => {
      var tmpName = _.sample(this.state.names);
      this.setState({
        currentName: tmpName
      });
    }, 100);
    
    // let currentName = _.sample(this.state.names);
    // let newNames = _.remove(this.state.names, name => {
    //   return name !== currentName;
    // });

    // this.setState({
    //   names: newNames,
    //   currentName: currentName
    // });
  }

  render() {
    return (
      <div className="App">
        <RandomiserForm 
          onNameKeyUp={ (event) => {this.onNameKeyUp(event)} }
          onSubmit={ (event) => {this.start(event)} }
        />

        <RandomiserDisplay currentName={this.state.currentName} />
      </div>
    );
  }
}

export default App;

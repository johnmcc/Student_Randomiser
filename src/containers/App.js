import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import NamesList from '../components/NamesList';
import NamesForm from '../components/NamesForm';
import RandomiserDisplay from '../components/RandomiserDisplay';

import getUrlParam from '../models/UrlParams'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    };
  }

  componentWillMount() {
    const names = getUrlParam("names[]");
    this.setState({
      names: names
    });
  }

  addName(name){
    this.setState({
      names: [...this.state.names, name]
    })
  }

  handleDelete(index) {
    this.setState({
      names: this.state.names.filter((name, i) => {return i !== index})
    })
  }

  handleStop(name) {
    console.log("Stopped at", name)
  }

  render() {
    const styles = {
      icon: {
        display: 'none'
      },
      wrapper: {
        width: '75%',
        margin: '0 auto'
      }
    };

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            iconStyleLeft={styles.icon}
            title="Random-O-Tron 3000"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={styles.wrapper}>
            <NamesForm onButtonClick={ this.addName.bind(this) } />
            <NamesList 
              names={ this.state.names }
              onClick={ this.handleDelete.bind(this) } />
            <RandomiserDisplay 
              names={this.state.names}
              onStop={this.handleStop}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class NamesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleTextChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleButtonClick(event) {
    event.preventDefault();
    this.props.onButtonClick(this.state.name);
    this.refs.textInput.input.value = ""
  }

  render() {
    const formStyles = {
      textAlign: 'center',
      padding: '40px'
    };
    return (
      <form style={formStyles} onSubmit={this.handleButtonClick.bind(this)}>
        <TextField 
          ref="textInput"
          id="nameInput"
          onChange={this.handleTextChange.bind(this)} />
        
        <FlatButton type="submit" primary={true} >Add Name</FlatButton>

      </form>
    );
  }
};
import React from 'react';

export default class NamesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleKeyUp(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleButtonClick(event) {
    event.preventDefault();
    this.props.onButtonClick(this.state.name);
    this.refs.input.value = ""
  }

  render() {
    return (
      <form onSubmit={this.handleButtonClick.bind(this)}>
        <input type="text" ref="input" onKeyUp={this.handleKeyUp.bind(this)}/>
        <button>+</button>
      </form>
    );
  }
};
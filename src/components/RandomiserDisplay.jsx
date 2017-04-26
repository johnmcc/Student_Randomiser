import React from 'react';
import _ from 'lodash';


export default class RandomiserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stopped: false
    }
  }

  setRandomName() {
    if (!this.state.stopped) this.setState({
      name: _.sample(this.props.names)
    })
  }

  componentDidMount() {
    setInterval(this.setRandomName.bind(this), 100)
  }

  stop() {
    this.setState({stopped: true})
    this.props.onStop(this.state.name);
  }

  start() {
    this.setState({stopped: false})
  }

  render() {
    return (
      <div id="randomiser-display">
        <h1>{this.state.name}</h1>
        <button onClick={this.stop.bind(this)}>STOP</button>
        <button onClick={this.start.bind(this)}>GO</button>
      </div>
    );
  }
};
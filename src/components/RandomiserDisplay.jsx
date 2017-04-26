import React from 'react';
import _ from 'lodash';


export default class RandomiserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  setRandomName() {
    this.setState({
      name: _.sample(this.props.names)
    })
  }

  componentDidMount() {
    setInterval(this.setRandomName.bind(this), 200);
  }

  render() {
    return (
      <h1>{this.state.name}</h1>
    );
  }
};
import React from 'react';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';


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
    const styles = {
      wrapper: {
        textAlign: 'center'
      },
      heading: {
        fontFamily: "Roboto",
        fontSize: '48px'
      },
      button: {
        marginRight: "10px"
      }
    };

    return (
      <div id="randomiser-display" style={styles.wrapper}>
        <h1 style={styles.heading}>{this.state.name}</h1>

        <RaisedButton 
          style={styles.button} 
          secondary={true} 
          onClick={this.stop.bind(this)}>
            Stop
        </RaisedButton>

        <RaisedButton 
          primary={true} 
          onClick={this.start.bind(this)}>
            Go
        </RaisedButton>
      </div>
    );
  }
};
import React from 'react';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';


export default class RandomiserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      stopped: false
    }
  }

  setRandomName() {
    if (!this.state.stopped) this.setState({
      names: _.sampleSize(this.props.names, this.props.groupSize)
    })
  }

  componentDidMount() {
    setInterval(this.setRandomName.bind(this), 100)
  }

  stop() {
    this.setState({stopped: true})
    this.props.onStop(this.state.names);
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
        <h1 style={styles.heading}>{this.state.names.join(" & ")}</h1>

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
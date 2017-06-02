import React from 'react';
import _ from 'lodash';

import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

export default class RandomiserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      stopped: false,
      autodelete: false
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

  toggleAutodelete(e, isToggled) {
    this.setState({autodelete: isToggled})
  }

  stop() {
    this.setState({stopped: true});
    if (this.state.autodelete) this.delete()
  }

  delete() {
    this.props.onDelete(this.state.names);
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
      },
      toggle: {
        width: '20%',
        margin: "0 auto",
        marginTop: "10px"
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
          style={styles.button} 
          secondary={true}
          disabled={this.state.autodelete} 
          onClick={this.delete.bind(this)}>
          Delete
        </RaisedButton>

        <RaisedButton 
          primary={true} 
          onClick={this.start.bind(this)}>
          Go
        </RaisedButton>

        <Toggle
          label="Auto-delete"
          defaultToggled={false}
          onToggle={this.toggleAutodelete.bind(this)}
          style={styles.toggle}/>

      </div>
    );
  }
};
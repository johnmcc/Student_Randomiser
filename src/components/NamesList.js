import React from 'react';
import Chip from 'material-ui/Chip';

export default (props) => {
  if(!props.names.length){
    return null;
  }

  const styles = {
    chip: {
      margin: 4
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  const chips = props.names.map((name, i) => {
    return (
      <Chip
        key={i}
        value={name}
        onRequestDelete={() => {props.onClick(i)} }
        style={styles.chip}
      >
        {name}
      </Chip>
    );
  });

  return (
    <div style={styles.wrapper}>
      {chips}
    </div>
  );
}
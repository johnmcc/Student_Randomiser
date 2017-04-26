import React from 'react';

const RandomiserForm = ({onNameKeyUp, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input onKeyUp={onNameKeyUp} type="text" />
      <button>Start!</button>
    </form>
  );
};

export default RandomiserForm;
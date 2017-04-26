import React from 'react';

export default (props) => {
  const list = props.names.map((name, i) => {
    return <p key={i}>{name}</p>
  })

  return <div id="names-list">{list}</div>
}
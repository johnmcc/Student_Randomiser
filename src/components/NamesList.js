import React from 'react';


export default (props) => {
  const list = props.names.map((name, i) => {
    return (
      <li key={i}>
        {name} <button value={i} onClick={props.onClick}>-</button>        
      </li>
    )
  })

  return <ul id="names-list">{list}</ul>
}
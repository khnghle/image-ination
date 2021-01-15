import React from 'react';

function Image(props) {
  const {id, name, location, qty} = props.info
  return (
    <div>
      <div>{name}</div>
      <img src={location} alt={name}/>
      <div>{qty}</div>
    </div>
  );
}

export default Image;

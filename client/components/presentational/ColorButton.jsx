import React from 'react';

const ColorButton = props => {
  return (
    <button onClick={() => props.changeColor(props.color)} style={{backgroundColor: props.selected ? props.selected : null}}>{props.color}</button>
  );
}

export default ColorButton;
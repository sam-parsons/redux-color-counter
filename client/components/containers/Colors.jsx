import React from 'react';
import { connect } from 'react-redux';

import ColorButton from '../presentational/ColorButton.jsx';
import * as actions from "../../actions/actions";

const mapStateToProps = (state) => ({
  colors: state.colors.colors,
  currentColor: state.colors.currentColor
});

const mapDispatchToProps = (dispatch) => ({
  changeColor: newColor => dispatch(actions.changeColor(newColor))
})

const Colors = (props) => {
  return (
    <React.Fragment>
      <h2>color buttons</h2>
      {props.colors.colors.map(color => 
        <ColorButton 
          changeColor={props.changeColor} 
          color={color} 
          selected={props.currentColor === color ? color : null} 
        />)
      }
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
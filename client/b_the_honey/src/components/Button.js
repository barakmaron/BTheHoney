import { React } from 'react';
import PropTypes from 'prop-types';

import '../css/Button.scss';

const Button = ({ id, text, onClick, addCostumeWidth }) => {  
    let style = {};  
  return (
    <button id={id} onClick={onClick} style={{"width": addCostumeWidth}}> 
        <span id={id}>{text}</span>
        <div id={id} className="buttonColoring" style={style}></div>
    </button>
  )
  
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}


export default Button
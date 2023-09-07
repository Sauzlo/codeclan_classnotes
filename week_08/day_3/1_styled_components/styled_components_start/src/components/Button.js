import React from 'react';
import colors from '../utilities/cssColors';


const Button = ({onClick, text}) => {
  return ( 
    <button onClick={onClick}> {text} </button>
   );
}
 
export default Button;
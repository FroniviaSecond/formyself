import React from 'react';
import { ButtonType } from './button.options';

const Button = ({clickHandler, title}: ButtonType) => {
  return(
    <button
      onClick={clickHandler}
      className='rounded-lg bg-blue-300 text-lg border border-solid border-blue-800 pointer h-10 px-10'
    >
      {title}
    </button>
  )
}

export default Button;
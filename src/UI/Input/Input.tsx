import React from 'react';
import { InputType } from './input.options';

const Input = ({value, onChangeHandler, id, name}: InputType) => {
  return (
    <div className='w-auto h-16 flex flex-col'>
      <input
        id={id}
        value={value}
        onChange={onChangeHandler}
        className='w-auto rounded-2xl text-lg bg-blue-300 border border-solid border-blue-800 h-10 px-2'
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}

export default Input;
import React from 'react';
import {useNavigate} from 'react-router-dom';

const Alert = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500/50' onClick={() => {navigate(-1)}}>
      <div className='popup'>
        <h2 className='text-lg'> Alert </h2>
      </div>
    </div>
  );
}


export default Alert;
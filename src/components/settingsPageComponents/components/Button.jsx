import React from 'react';


function Button(props) {
  const { btnName, action } = props;

  return (
    <button className='reset-button' onClick={action}>{btnName}</button>
  );
};

export default Button;

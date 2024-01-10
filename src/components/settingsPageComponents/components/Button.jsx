import React from 'react';


function Button(props) {
  const { btnName } = props;

  return (
    <button>{btnName}</button>
  );
};

export default Button;

import React from 'react';


function Toggle(props) {
  const { onChangeAction } = props;
  // console.log('----------', onChangeAction)

  return (
    <label className="switch">
        <input
        id="slider"
        type="checkbox"
        onChange={onChangeAction}
        />
        <span className="slider round"></span>
    </label>
  );
};

export default Toggle;

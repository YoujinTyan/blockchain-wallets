import React from 'react';


function Toggle(props) {
  const { onChangeAction, defaultCheckedValue } = props;

  return (
    <label className="switch">
        <input
        id="slider"
        type="checkbox"
        onChange={onChangeAction}
        defaultChecked={defaultCheckedValue}
        />
        <span className="slider round"></span>
    </label>
  );
};

export default Toggle;

import React from 'react';


function Toggle(props) {
  const { params } = props;
  // console.log('----------', onChangeAction)
  const type = params.type;

  return (
    <label className="switch">
        <input
        id="slider"
        type="checkbox"
        onChange={
          type === 'walletToggle' ? 
          params.onChange.turnOffOnCardano :
          params.onChange.changeTheme
          }
        />
        <span className="slider round"></span>
    </label>
  );
};

export default Toggle;

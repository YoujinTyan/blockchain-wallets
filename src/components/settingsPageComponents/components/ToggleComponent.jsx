import React from 'react';
import { useSelector } from 'react-redux';


function Toggle(props) {
  const { params } = props;
  // console.log('----------', onChangeAction)
  const type = params.type;
  const cardanoMode = useSelector((state) => state.settings.cardanoMode)
  const theme = useSelector((state) => state.settings.theme)

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
        checked={
          type === 'walletToggle' ? cardanoMode 
          : type === 'themeToggle' && theme === 'dark' ? 
          true : false
        }
        />
        <span className="slider round"></span>
    </label>
  );
};

export default Toggle;

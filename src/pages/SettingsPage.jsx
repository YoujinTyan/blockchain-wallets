import React, {useState} from 'react';
import '../styles/pageSettings.css'
import { useSelector } from "react-redux";
import Settings from '../components/settingsPageComponents';
import { SETTINGSPAGE_CONSTANTS } from '../utils/constants';

function SettingsPage() {
  const [ themeState, setThemeState ] = useState('light')

  const currentTheme = useSelector(state => state.settings.theme);

  function changeTheme() {
    themeState === 'dark' ? setThemeState('light') : setThemeState('dark');
    // ставим currentTheme --> dark | light
    console.log('theme changed');
  };

  function turnOffOnCardano() {
    console.log('turnOffOnCardano');
  };


  return (
    <div className={'container'}>

      <h2>{SETTINGSPAGE_CONSTANTS.PAGE_TITLE}</h2>
      <Settings />
      
    </div>
  );
};

export default SettingsPage;

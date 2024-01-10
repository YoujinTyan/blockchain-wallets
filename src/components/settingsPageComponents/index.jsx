import { useSelector } from "react-redux";
import { useState } from "react";
import './style.css';
import Button from './components/Button';
import TableLine from './components/TableLine';
import { SETTINGSPAGE_CONSTANTS } from "../../utils/constants";

function Settings() {

  const settingsTable = SETTINGSPAGE_CONSTANTS.settings_data;

  
  const [ themeState, setThemeState ] = useState('light');

  const currentTheme = useSelector(state => state.settings.theme);

  function changeTheme() {
    themeState === 'dark' ? setThemeState('light') : setThemeState('dark');
    // ставим currentTheme --> dark | light
    console.log('theme changed');
  };

  function turnOffOnCardano() {
    console.log('turnOffOnCardano');
  };

  settingsTable[0].children.childrenParams.onChange = {turnOffOnCardano};
  settingsTable[1].children.childrenParams.onChange = {changeTheme};

  return (
    <table className="table">
      <tbody>
        {   settingsTable.map((item, index) => (
              <TableLine
                key={index}
                title={item.title}
                children={item.children}
              />
            ))
        }
        <tr className="thead">
          <td className="title-td">
            {/*TODO: стилизовать кнопку и добавить обработку reset*/}
            <Button btnName={'Сбросить настройки'} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Settings;

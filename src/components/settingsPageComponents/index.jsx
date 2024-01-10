import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './style.css';
import { useDispatch } from "react-redux";
import Button from './components/Button';
import TableLine from './components/TableLine';
import { SETTINGSPAGE_CONSTANTS,  SETTINGS_STORE_CONSTANTS as VARS} from "../../utils/constants";
import { setTheme } from "../../store/reducers/settings_reducer";

function Settings() {

  const settingsTable = SETTINGSPAGE_CONSTANTS.settings_data;
  
  settingsTable[0].children.childrenParams.onChange = {turnOffOnCardano};
  settingsTable[1].children.childrenParams.onChange = {changeTheme};

  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.settings.theme)


  function changeTheme() {
    dispatch(setTheme(themeState === VARS.LIGHT ? VARS.DARK : VARS.LIGHT))
  };

  function turnOffOnCardano() {
    console.log('turnOffOnCardano');
  };


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

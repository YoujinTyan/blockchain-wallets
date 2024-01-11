import { useSelector } from "react-redux";
import './style.css';
import { useDispatch } from "react-redux";
import Button from './components/Button';
import TableLine from './components/TableLine';
import { SETTINGSPAGE_CONSTANTS,  SETTINGS_STORE_CONSTANTS as VARS} from "../../utils/constants";
import { setCardanoMode, setCountPostsPerPage, setFontFamily, setFontSize, setTheme } from "../../store/reducers/settings_reducer";

function Settings() {

  const settingsTable = SETTINGSPAGE_CONSTANTS.settings_data;
  
  settingsTable[0].children.childrenParams.onChange = {turnOffOnCardano};
  settingsTable[1].children.childrenParams.onChange = {changeTheme};

  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.settings.theme)
  const cardanoMode = useSelector((state) => state.settings.cardanoMode)


  function changeTheme() {
    dispatch(setTheme(themeState === VARS.LIGHT ? VARS.DARK : VARS.LIGHT));
  };

  function turnOffOnCardano() {
    dispatch(setCardanoMode(!cardanoMode));
  };

  function handleSelect(event, type) {
    type === 'FontOption' ?
      dispatch(setFontFamily(event.target.value)) :
    type === 'fontSizeOption' ?
      dispatch(setFontSize(event.target.value)) :
    dispatch(setCountPostsPerPage(event.target.value));
  };

  function handleReset() {
    dispatch(setCardanoMode(VARS.CARDANO_OFF));
    dispatch(setTheme(VARS.LIGHT));
    dispatch(setFontFamily(VARS.FONT_ROBOTO));
    dispatch(setFontSize(VARS.FONT_SIZE_NORMAL));
    dispatch(setCountPostsPerPage(VARS.POSTS_COUNT_MEDIUM));
  };


  return (
    <table className="table">
      <tbody>
        {   settingsTable.map((item, index) => (
              <TableLine
                key={index}
                title={item.title}
                children={item.children}
                action={handleSelect}
              />
            ))
        }
        <tr className="thead">
          <td className="title-td">
            {/*TODO: стилизовать кнопку и добавить обработку reset*/}
            <Button btnName={'Сбросить настройки'} action={handleReset}/>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Settings;

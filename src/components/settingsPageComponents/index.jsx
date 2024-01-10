import { useSelector } from "react-redux";
import { useState } from "react";
import './style.css';
import Button from './components/Button';
import TableLine from './components/TableLine';


function Settings() {

  const settingsTable = [
    {
      title: 'Вкл/Выкл Cardano',
      children: {
        component: 'Toggle',
        childrenParams: {
          onChange: {turnOffOnCardano},
          defaultChecked: ''
        },  
      }, 
    },
    {
      title: 'Тёмная тема', 
      children: {
        component: 'Toggle',
        childrenParams: {
          onChange: { changeTheme },
          defaultChecked: ''
        },
      }, 
    },
    {
      title: 'Шрифт', 
      children: {
        component: 'Options',
        childrenParams: {
          name: 'font-name-select',
          options: [
            { name: 'calibri',  option: 'Calibri'  },
            { name: 'tahoma',   option: 'Tahoma'   },
            { name: 'segoe ui', option: 'Segoe UI' },
            { name: 'roboto',   option: 'Roboto'   },
          ]
        },
      }, 
    },
    {
      title: 'Размер шрифта', 
      children: {
        component: 'Options',
        childrenParams: {
          name: 'font-size-select',
          options: [
            { name: 'large',    option: 'Крупный'    },
            { name: 'normal',   option: 'Нормальный' },
            { name: 'small',    option: 'Мелкий'     },
          ],
        },
      }, 
    },
    {
      title: 'Кол-во постов на странице', 
      children: {
        component: 'Options',
        childrenParams: {
          name: 'count-posts-select',
          options: [
            { name: 'little', option: 5  },
            { name: 'medium', option: 10 },
            { name: 'much',   option: 15 },
          ],
        },
      }, 
    },
  ];
  
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

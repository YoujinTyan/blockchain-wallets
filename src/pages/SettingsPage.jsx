import React from 'react';
import '../styles/pageSettings.css'


function SettingsPage() {

  function changeTheme() {
    console.log('theme changed');
  };

  function turnOffOnCardano() {
    console.log('turnOffOnCardano');
  };

  return (
    <div className={'container'}>

      <h2>Настройки</h2>
      <table className="table">
        <tbody>
          <tr className="thead">
            <td className="title-td">Вкл/Выкл Cardano</td>
            <td className="content-td">
              <label className="switch">
                <input
                  id="slider"
                  type="checkbox"
                  onChange={turnOffOnCardano}
                />
                <span className="slider round"></span>
              </label>
            </td>
          </tr>

          <tr className="thead">
            <td className="title-td">Темная тема</td>
            <td className="content-td">
              <label className="switch">
                <input
                  id="slider"
                  type="checkbox"
                  onChange={changeTheme}
                />
                <span className="slider round"></span>
              </label>
            </td>
          </tr>

          <tr className="thead">
            <td className="title-td">Шрифт</td>
            <td className="content-td">
              <label>
                <select name="font-name-select" className="select">
                  <option value="calibri">Calibri</option>
                  <option value="tahoma">Tahoma</option>
                  <option value="segoe ui">Segoe UI</option>
                  <option value="roboto">Roboto</option>
                </select>
              </label>
            </td>
          </tr>

          <tr className="thead">
            <td className="title-td">Размер шрифта</td>
            <td className="content-td">
              <label>
                <select name="font-size-select" className="select">
                  <option value="крупный">Крупный</option>
                  <option value="нормальный">Нормальный</option>
                  <option value="мелкий">Мелкий</option>
                </select>
              </label>
            </td>
          </tr>

          <tr className="thead">
            <td className="title-td">Кол-во постов на странице</td>
            <td className="content-td">
              <label>
                <select name="count-posts-select" className="select small-select">
                  <option value="пять">5</option>
                  <option value="десять">10</option>
                  <option value="пятнадцать">15</option>
                </select>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SettingsPage;

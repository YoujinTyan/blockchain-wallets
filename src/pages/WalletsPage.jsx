import React from 'react';


function WalletsPage() {

  return (
    <React.Fragment>
      <h1>WalletsPage</h1>
      
    </React.Fragment>
  );
};

export default WalletsPage;


// В каждом из разделов при отсутствии кошелька показывается кнопка вызова расширений браузера для подключения кошельков (для сети Ethereum использовать кошелек Metamask; для сети Cardano использовать кошелек Nami).
// Раздел Cardano может быть выключен через настройки приложения.
// При любом подключенном кошельке показывается адрес выбранного пользователем аккаунта.
// Любой подключенный аккаунт (адрес) можно скопировать нажатием на соответствующую кнопку.
// Каждый подключенный аккаунт (адрес) можно отключить нажатием на соответствующую кнопку.
// При отключении аккаунта, состояние раздела сбрасывается.

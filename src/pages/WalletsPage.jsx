import { Button } from '@mui/material';
import React, { useState } from 'react';


function WalletsPage() {
  const networks = {
    ETH: { name: 'eth', chainId: '0x61' },
    ADA: { name: 'ada', chainId: '0x7d1' },
  };

  const [wallets, setWallets] = useState([]);
  const [currentNetwork, setCurrentNetwork] = useState(networks.ETH.name);

  const switchNetworkTo = async (network) => {
    const { ethereum } = window;

    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId: network
      }]
    });
  };

  const connectEthWallet = async () => {
    try {

      const { ethereum } = window;

      const ethAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
        params: [{ chainId: networks.ETH.chainId }]
      });

      console.log(ethAccounts[0])
      setWallets(ethAccounts[0]);


    } catch (e) {
      return Promise.reject(e);
    }
  };

  const connectAdaWallet = async () => {
    try {

      const { ethereum } = window;

      const ethAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
        params: [{ chainId: networks.ADA.chainId }]
      });

      currentNetwork === 'eth' ?
        setWallets(ethAccounts) : setWallets(ethAccounts);

    } catch (e) {
      return Promise.reject(e);
    }
  };

  const disconnectEthWallet = async () => {
    try {

      const { ethereum } = window;

      // ethereum.on('disconnect');
      setWallets([]);

    } catch (e) {
      return Promise.reject(e);
    }
  };

  const disconnectAdaWallet = async () => {
    try {

      const { ethereum } = window;

      // ethereum.on('disconnect');
      setWallets([]);

    } catch (e) {
      return Promise.reject(e);
    }
  };

  return (
    <React.Fragment>
      <h1>WalletsPage</h1>
      <div className='container'>
        <Button onClick={connectEthWallet}>Подключить кошелек Ethereum</Button>
        <Button onClick={disconnectEthWallet}>Отключить кошелек Ethereum</Button>

        <Button onClick={connectAdaWallet}>Подключить кошелек Cardano</Button>
        <Button onClick={disconnectAdaWallet}>Отключить кошелек Cardano</Button>
      </div>
      <div className='container'>
        <p style={{ color: 'black' }}>: {wallets}</p>
      </div>

    </React.Fragment>
  );
};

export default WalletsPage;


// В каждом из разделов при отсутствии кошелька показывается кнопка вызова расширений браузера для подключения кошельков 
// (для сети Ethereum использовать кошелек Metamask; для сети Cardano использовать кошелек Nami).
// Раздел Cardano может быть выключен через настройки приложения.
// При любом подключенном кошельке показывается адрес выбранного пользователем аккаунта.
// Любой подключенный аккаунт (адрес) можно скопировать нажатием на соответствующую кнопку.
// Каждый подключенный аккаунт (адрес) можно отключить нажатием на соответствующую кнопку.
// При отключении аккаунта, состояние раздела сбрасывается.

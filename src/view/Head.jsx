import React from 'react';
import '../styles/head.css';


function Head() {
  return (
    <nav className='navigation'>
      <a href='/' className='logo'>
        MBWallets
      </a>
      <div className='navigation-menu'>
        <ul>
          <li>
            <a 
              className='link btn-off' 
              href='/'
            >Главная
            </a>
          </li>
          <li>
            <a 
              className='link btn-off'
              href='/wallets'
            >Кошельки
            </a>
          </li>
          <li>
            <a 
              className='link btn-off'
              href='/settings'
              >Настройки
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Head;


import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/head.css';


function Head() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [ activePage, setActivePage ] = useState('link btn-off');

  return (
    <nav className="navigation">
      <Link href="/" className="logo">
        MBWallets
      </Link>
      <button
        className="hamburger"
        onClick={() => { setIsNavExpanded(!isNavExpanded); }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="black" 
          className="w-6 h-6"
        >
          <path 
            fillRule="evenodd" 
            d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" 
            clipRule="evenodd" 
          />
        </svg>

      </button>
      <div
        className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }
      >
        <ul>
          <li onClick={() => { setIsNavExpanded(setIsNavExpanded(!isNavExpanded)); }}>
            <Link 
              onClick={() => setActivePage("main")} 
              className={activePage === "main" ? "link current-page" : "link btn-off"} 
              to={"/"}
            >Главная
            </Link>
          </li>
          <li onClick={() => { setIsNavExpanded(setIsNavExpanded(!isNavExpanded)); }}>
            <Link 
              onClick={() => setActivePage("wallets")} 
              className={activePage === "wallets" ? "link current-page" : "link btn-off"} 
              to={"/wallets"}
            >Кошельки
            </Link>
          </li>
          <li onClick={() => { setIsNavExpanded(setIsNavExpanded(!isNavExpanded)); }}>
            <Link 
              onClick={() => setActivePage("settings")} 
              className={activePage === "settings" ? "link current-page" : "link btn-off"}
              to={"/settings"}
              >Настройки
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Head;


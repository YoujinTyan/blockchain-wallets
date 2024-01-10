import React from 'react';

import NavLink from './NavLink';
import Hamburger from './Hamburger';


function NavBar(props) {
  const { isNavExpanded, setIsNavExpanded, activePage, setActivePage } = props;

  return (
    <React.Fragment>
      <Hamburger
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <div
        className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }
      >
        <ul>
          <li onClick={() => {setIsNavExpanded(setIsNavExpanded(!isNavExpanded))}}>
            <NavLink
              pageNameRu={"Главная"}
              pageNameEn={"main"}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </li>

          <li onClick={() => {setIsNavExpanded(setIsNavExpanded(!isNavExpanded))}}>
            <NavLink
              pageNameRu={"Кошельки"}
              pageNameEn={"wallets"}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </li>

          <li onClick={() => {setIsNavExpanded(setIsNavExpanded(!isNavExpanded))}}>
            <NavLink
              pageNameRu={"Настройки"}
              pageNameEn={"settings"}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

import React from 'react';

import NavLink from './NavLink';
import Hamburger from './Hamburger';
import { HEADER_CONSTANTS } from '../utils/constants';


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
              pageNameRu={HEADER_CONSTANTS.MAIN_PAGE_RU}
              pageNameEn={HEADER_CONSTANTS.MAIN_PAGE_EN}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </li>

          <li onClick={() => {setIsNavExpanded(setIsNavExpanded(!isNavExpanded))}}>
            <NavLink
              pageNameRu={HEADER_CONSTANTS.WALLETS_PAGE_RU}
              pageNameEn={HEADER_CONSTANTS.WALLETS_PAGE_EN}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </li>

          <li onClick={() => {setIsNavExpanded(setIsNavExpanded(!isNavExpanded))}}>
            <NavLink
              pageNameRu={HEADER_CONSTANTS.SETTINGS_PAGE_RU}
              pageNameEn={HEADER_CONSTANTS.SETTINGS_PAGE_EN}
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

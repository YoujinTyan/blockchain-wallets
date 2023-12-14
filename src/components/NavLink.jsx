import React from 'react';
import { Link } from 'react-router-dom';


function NavLink(props) {
  const {pageNameRu, pageNameEn, activePage, setActivePage } = props;

  return pageNameEn !== 'main' ? (
    <Link 
      onClick={() => setActivePage(pageNameEn)} 
      className={activePage === pageNameEn ? "link current-page" : "link btn-off"} 
      to={`/${pageNameEn}`}
    >{pageNameRu}
    </Link>
  )
  : (
    <Link 
      onClick={() => setActivePage(pageNameEn)} 
      className={activePage === pageNameEn ? "link current-page" : "link btn-off"} 
      to={'/'}
    >{pageNameRu}
    </Link>
  )

}

export default NavLink;

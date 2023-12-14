import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/head.css';
import '../styles/adaptive.css';


function Head() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [ activePage, setActivePage ] = useState('link btn-off');

  return (
    <nav className="navigation">
      <Link to="/" className="logo">
        MBWallets
      </Link>
      <NavBar 
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </nav>
  );
}

export default Head;


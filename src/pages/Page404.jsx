import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE404_CONSTANTS } from '../utils/constants';
import "../styles/page404.css";


function Page404() {
  return (
    <div className="main-container">
      <div className="container">
            <h1>{PAGE404_CONSTANTS.TITLE}</h1>
            <h3>{PAGE404_CONSTANTS.SUBTITLE}</h3>
            <p>
              {PAGE404_CONSTANTS.TEXT} 
              <Link className='back-link' to={"/"}>
                <strong>{PAGE404_CONSTANTS.LABEL}</strong>
              </Link>
            </p>
      </div>
    </div>
  );
};

export default Page404;

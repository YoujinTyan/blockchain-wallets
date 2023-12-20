import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/page404.css";


function Page404() {
  return (
    <div className="main-container">
      <div className="container">
            <h1>Ошибка 404</h1>
            <h3>Страница не найдена</h3>
            <p>
              Вернитесь на одну из страниц сайта 
              или перейдите на <Link className='back-link' to={"/"}><strong>главную</strong></Link>
            </p>
      </div>
    </div>
  );
};

export default Page404;

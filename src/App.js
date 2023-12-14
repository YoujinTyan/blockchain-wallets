import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from './view/Head';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import WalletsPage from './pages/WalletsPage';


function App() {

  return (
    <React.Fragment>
      <Head />
      <Routes> 
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/wallets'
          element={<WalletsPage />}
        />
        <Route
          path='/settings'
          element={<SettingsPage />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;

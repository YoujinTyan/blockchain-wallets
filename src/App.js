import React from 'react';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import WalletsPage from './pages/WalletsPage';
import Head from './view/Head';
import { Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404';


function App() {

  return (
    <React.Fragment>
      <Head />
      <Routes> 
        <Route
          path='/'
          element={<MainPage/>}
        />
        <Route
          path='/wallets'
          element={<WalletsPage/>}
        />
        <Route
          path='/settings'
          element={<SettingsPage/>}
        />
        <Route
          path='*'
          element={<Page404/>}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;

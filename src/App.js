import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from "@mui/material";

import Head from './view/Head';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import WalletsPage from './pages/WalletsPage';
import { useSelector } from 'react-redux';


function App(props) {
    const { store } = props;

    const theme = useSelector((state) => state.settings.theme);
    const fontFamily = useSelector((state) => state.settings.fontFamily);
    // TODO: add font, size etc

    useEffect(() => {
        console.log('in app.jsx:', fontFamily)
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.setAttribute('data-font', fontFamily);
      })

    return (
        <React.Fragment>
          <Head />
          <Container className="app">
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
            </Container>
        </React.Fragment>
    );
}

export default App;

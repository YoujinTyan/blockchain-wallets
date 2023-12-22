import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {Container} from "@mui/material";

import Head from './view/Head';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import WalletsPage from './pages/WalletsPage';


function App(props) {
    const { store } = props;

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

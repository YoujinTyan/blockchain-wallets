import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route
                path='/'
                element={<MainPage store={store} />}
            />
            <Route
                path='/wallets'
                element={<WalletsPage />}
            />
            <Route
                path='/settings'
                element={<SettingsPage store={store} />}
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

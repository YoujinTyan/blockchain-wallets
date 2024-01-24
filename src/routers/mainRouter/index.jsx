import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../pages/Blog';
import Error404 from '../../pages/Error404';
import Wallets from '../../pages/Wallets';
import Settings from '../../pages/Settings';
 
const MainRouter = createBrowserRouter([
    {
        name: 'Блог',
        path: '/',
        element: <Blog />,
        errorElement: <Error404 />
    },
    {
        name: 'Кошельки',
        path: '/wallets',
        element: <Wallets />
    },
    {
        name: 'Настройки',
        path: '/settings',
        element: <Settings />
    },
]);

export default MainRouter;
  
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../pages/Blog';
import Error404 from '../../pages/Error404';
import Wallets from '../../pages/Wallets';
import Settings from '../../pages/Settings';

export const routes = {
    blog: '/',
    wallets: '/wallets',
    settings: '/settings',
}
  
const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Blog />,
        errorElement: <Error404 />
    },
    {
        path: '/wallets',
        element: <Wallets />
    },
    {
        path: '/settings',
        element: <Settings />
    },
]);

export default MainRouter;
  
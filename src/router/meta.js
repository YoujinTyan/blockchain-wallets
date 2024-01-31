import { paths } from '../utils/constants';
import ErrorPage from '../pages/ErrorPage';
import BlogPage from '../pages/BlogPage';
import WalletsPage from '../pages/WalletsPage';
import SettingsPage from '../pages/SettingsPage';


const pagesMeta = [
  {
      name: 'Блог',
      path: paths.HOME,
      element: <BlogPage />,
      errorElement: <ErrorPage />
  },
  {
      name: 'Кошельки',
      path: paths.WALLETS,
      element: <WalletsPage />
  },
  {
      name: 'Настройки',
      path: paths.SETTINGS,
      element: <SettingsPage />
  },
]

export default pagesMeta;

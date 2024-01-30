import ErrorPage from '../../pages/ErrorPage';
import Children from '../../pages/NamePage';
import Children2 from '../../pages/NamePage2';
import Children3 from '../../pages/NamePage3';
import { paths } from '../../utils/ConstatnsSource';


const pagesMeta = [
  {
      name: 'Блог',
      path: paths.HOME,
      element: <Children />,
      errorElement: <ErrorPage />
  },
  {
      name: 'Кошельки',
      path: paths.WALLETS,
      element: <Children2 />
  },
  {
      name: 'Настройки',
      path: paths.SETTINGS,
      element: <Children3 />
  },
]

export default pagesMeta;

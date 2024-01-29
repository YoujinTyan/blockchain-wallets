import ErrorPage from '../../pages/ErrorPage';
import Children from '../../pages/NamePage';
import Children2 from '../../pages/NamePage2';
import Children3 from '../../pages/NamePage3';

const pagesMeta = [
  {
      name: 'Блог',
      path: '/',
      element: <Children />,
      errorElement: <ErrorPage />
  },
  {
      name: 'Кошельки',
      path: '/wallets',
      element: <Children2 />
  },
  {
      name: 'Настройки',
      path: '/settings',
      element: <Children3 />
  },
]

export default pagesMeta;

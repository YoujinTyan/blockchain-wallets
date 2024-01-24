import './style.css';
import { RouterProvider } from 'react-router-dom';
import MainRouter from '../../routers/mainRouter';

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;

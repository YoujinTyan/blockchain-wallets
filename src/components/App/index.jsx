import { RouterProvider } from 'react-router-dom';
import MainRouter from '../../routers/mainRouter';
import './style.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;

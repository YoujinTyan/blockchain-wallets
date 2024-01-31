import { RouterProvider } from 'react-router-dom';
import MainRouter from '../../router/';
import './style.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;

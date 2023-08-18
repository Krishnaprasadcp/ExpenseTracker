import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage />,
    element:<HomePage />
  }
]);

function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;

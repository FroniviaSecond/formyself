import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/errorPage';
import Feed from '../components/feed/feed';
import CalculatorPage from '../pages/calculatorPage/calculatorPage';
import { ROUTER_ROUTES } from '../configs/routes';
import ConclusionPage from '../pages/conclusionPage/conclusionPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: ROUTER_ROUTES.feed,
        element: <Feed />,
        errorElement: <ErrorPage />
      },
      {
        path: ROUTER_ROUTES.calculation,
        element: <CalculatorPage />,
        errorElement: <ErrorPage />
      },
      {
        path: ROUTER_ROUTES.conclusion,
        element: <ConclusionPage />,
        errorElement: <ErrorPage />
      }
    ]
  }, 
]);

export default router;
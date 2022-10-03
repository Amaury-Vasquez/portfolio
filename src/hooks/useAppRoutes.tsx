import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));

export const useAppRoutes = () => {
  const routes = [
    {
      element: <Home />,
      path: '/',
    },
    {
      element: <Projects />,
      path: '/projects',
    },
  ];

  const generateRoutes = () => {
    return (
      <Routes>
        {routes.map((route, i) => (
          <Route
            element={route.element}
            path={route.path}
            key={route.path + i + 'route'}
          />
        ))}
      </Routes>
    );
  };

  return generateRoutes;
};

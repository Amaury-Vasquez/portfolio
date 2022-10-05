import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
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
    {
      element: <About />,
      path: '/about',
    },
    {
      element: <Contact />,
      path: '/contact',
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

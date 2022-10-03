import { useLocation } from 'react-router-dom';
import { Head, Link, NavBar } from './styles';

export const Header = () => {
  const routes = ['projects', 'about', 'contact'];
  const { pathname } = useLocation();

  return (
    <Head>
      <NavBar>
        {routes.map((route, i) => (
          <Link
            key={`${route + i}`}
            to={`/` + route}
            active={pathname === '/' + route ? 1 : 0}
          >
            {route}
          </Link>
        ))}
      </NavBar>
      <Link active={pathname === '/' ? 1 : 0} to="/">
        Amaury Vasquez
      </Link>
    </Head>
  );
};

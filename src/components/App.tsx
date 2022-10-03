import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from '../Layout';
import { useAppRoutes } from '../hooks/useAppRoutes';
import { FallbackScreen } from './FallbackScreen';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  const generateRoutes = useAppRoutes();
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<FallbackScreen />}>{generateRoutes()}</Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;

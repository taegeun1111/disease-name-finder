import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './components/common/layout/Layout';
import Header from './components/common/header/Header';
import { RecommendProvider } from './store/RecommendProvider';

function App() {
  return (
    <RecommendProvider>
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </RecommendProvider>
  );
}

export default App;

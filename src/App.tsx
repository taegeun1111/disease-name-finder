import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from './components/common/Layout/Layout';
import Header from './components/common/Header/Header';
import { RecommendProvider } from './store/recommend/RecommendProvider';
import { InputProvider } from './store/input/InputProvider';

function App() {
  return (
    <InputProvider>
      <RecommendProvider>
        <Layout>
          <Header />
          <Outlet />
        </Layout>
      </RecommendProvider>
    </InputProvider>
  );
}

export default App;

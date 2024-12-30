import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import PageLayout from './components/layout/PageLayout';
import GoToTopButton from './components/ui/GotoTopButton';
import StrokeTextLoader from './components/ui/StrokeTextLoader';
import React, { Suspense } from 'react';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Blogs = React.lazy(() => import('./pages/Blogs'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<StrokeTextLoader />}>
          <PageLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              {/* Other routes */}
            </Routes>
            <GoToTopButton />
          </PageLayout>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

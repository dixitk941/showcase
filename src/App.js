import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { delay } from './components/delay'; // Import the delay function

// Lazy load the pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Simulate a delay before rendering the content
    const loadContent = async () => {
      await delay(1500); // Delay in milliseconds (adjust as needed)
      setIsLoading(false);
    };

    loadContent();
  }, []);

  useEffect(() => {
    // Trigger transition delay when location changes
    const handleNavigation = async () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      await delay(1000); // Delay in milliseconds (adjust as needed)
      setIsTransitioning(false);
    };

    handleNavigation();
  }, [location]);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {isLoading || isTransitioning ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
            </Routes>
          </Suspense>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;

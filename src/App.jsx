import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.jsx';

const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const JobsPage = lazy(() => import('./pages/JobsPage.jsx'));
const Navbar = lazy(() => import('./components/NavBar.jsx'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

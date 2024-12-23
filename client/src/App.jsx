import React, { useState, useMemo, createContext } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Upload from './pages/Upload';

// Create a context for global state management
const AppContext = createContext();

const App = () => {
  const [state, setState] = useState({
    user: null,
    sofas: []
  });

  const contextValue = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };


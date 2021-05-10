import { useState } from 'react';
import Main from './components/Main';

import './App.css';

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? 'dark' : 'light';

  return (
    <div className={theme}>
      <NavBar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Sidebar showSidebar={showSidebar} />
      <Main showSidebar={showSidebar} />
    </div>
  );
}

export default App;

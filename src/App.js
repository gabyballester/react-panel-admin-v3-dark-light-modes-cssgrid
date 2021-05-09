import { Fragment, useState } from 'react';
import Main from './components/Main';

import './App.css';

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Fragment>
      <NavBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <Sidebar showSidebar={showSidebar}/>
      <Main showSidebar={showSidebar}/>
    </Fragment>
  );
}

export default App;

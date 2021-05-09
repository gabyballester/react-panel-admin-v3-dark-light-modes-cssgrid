import { Fragment } from 'react';
import Main from './components/Main';

import './App.css';

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;

import HomePage from "../pages/home/index"
import { Route,Routes } from "react-router-dom";
import LoginPage from '../pages/login/login';
import { Fragment } from 'react';
import React from 'react';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>}/>
      </Routes>
    </Fragment>
    
  );
}
export default App;

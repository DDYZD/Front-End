import React from 'react';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Changepassword from './components/Changepassword';
import Main from './components/Main';
import Container from './components/bodyconponents/Container';

function App() {
  return (
    <>
      <Route component={Register} path="/Register" />
      <Route component={Login} path="/Login" />
      <Route component={Changepassword} path="/Changepassword" />
      <Route component={Main} exact path="/"/>
    </>
  );
}

export default App;

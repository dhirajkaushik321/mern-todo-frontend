import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import { TodoContextProvider } from './context/TodoContext';
import Dashboard from './component/pages/Dashboard';
import LandingPage from './component/pages/LandingPage';
import Profile from './component/pages/Profile';
function App() {
  return (
    <TodoContextProvider>
    <Switch>
    <Route exact path="/"><LandingPage /> </Route>
   
    <Route exact path="/Dashboard"><Dashboard/></Route>
    <Route exact path="/Dashboard/me"><Profile/></Route>
    </Switch>
      </TodoContextProvider>
    
  );
}

export default App;

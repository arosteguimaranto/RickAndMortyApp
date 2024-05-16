import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './components/Home';
import { Locations } from './components/Locations';
import { Favorites } from './components/Favorites';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home} />
        <Route path="/locations" Component={Locations} />
        <Route path="/favorites" Component={Favorites} />
        <Route path="/login" Component={Login} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

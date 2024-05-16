import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { Home } from './components/Home';
import { Locations } from './components/Locations';
import { Favorites } from './components/Favorites';
import { Login } from './components/Login';
import { FavoritesProvider } from './context/favoritesContext';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <BrowserRouter>
    <FavoritesProvider>
      <AuthProvider>
      <Routes>
    <Route path="/" Component={Home} />
        <Route path="/locations" Component={Locations} />
        <Route path="/favorites" Component={Favorites} />
        <Route path="/login" Component={Login} />
    </Routes>
      </AuthProvider>
    </FavoritesProvider>
  </BrowserRouter>
  );
}

export default App;

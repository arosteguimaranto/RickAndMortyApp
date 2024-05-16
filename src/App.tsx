import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Characters from './components/Home';
import { Locations } from './components/Locations';
import { Favorites } from './components/Favorites';
import { Login } from './components/Login';
import { FavoritesProvider } from './context/favoritesContext';
import { AuthProvider } from './context/authContext';
import { RickAndMortyProvider } from './context/charactersContext';

function App() {
  return (
    <BrowserRouter>
    <RickAndMortyProvider>
    <FavoritesProvider>
      <AuthProvider>
      <Routes>
    <Route path="/" Component={Characters} />
        <Route path="/locations" Component={Locations} />
        <Route path="/favorites" Component={Favorites} />
        <Route path="/login" Component={Login} />
    </Routes>
      </AuthProvider>
    </FavoritesProvider>
    </RickAndMortyProvider>
  </BrowserRouter>
  );
}

export default App;

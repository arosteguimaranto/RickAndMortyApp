import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Home";
import { Locations } from "./components/Locations";
import { Favorites } from "./components/Favorites";
import { Login } from "./components/Login";
import { AuthProvider } from "./context/authContext";
import { RickAndMortyProvider } from "./context/charactersContext";
import Layout from "./ui/Layout/Layout";
import { LogProvider, LogContext } from './context/logContext';

function App() {
	return (
		<BrowserRouter>
		<Layout>
			<LogProvider>
			<RickAndMortyProvider>
				<AuthProvider>

					<Routes>
						<Route path="/" Component={Characters} />
						<Route path="/locations" Component={Locations} />
						<Route path="/favorites" Component={Favorites} />
						<Route path="/login" Component={Login} />
					</Routes>


				</AuthProvider>
			</RickAndMortyProvider>
			</LogProvider>

			</Layout>
		</BrowserRouter>
	);
}

export default App;

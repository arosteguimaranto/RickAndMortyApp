import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./components/Home";
import { Locations } from "./components/Locations";
import { Favorites } from "./components/Favorites";
import { AuthProvider } from "./context/authContext";
import { RickAndMortyProvider } from "./context/charactersContext";
import Layout from "./ui/Layout/Layout";
import { LogProvider, LogContext } from "./context/logContext";
import Form from "./ui/Form/Form";
import { LocationProvider } from "./context/locationContext";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<LogProvider>
					<RickAndMortyProvider>
						<LocationProvider>
							<AuthProvider>
								<Routes>
									<Route path="/" Component={Characters} />
									<Route path="/locations" Component={Locations} />
									<Route path="/favorites" Component={Favorites} />
									<Route path="/form" Component={Form} />
								</Routes>
							</AuthProvider>
						</LocationProvider>
					</RickAndMortyProvider>
				</LogProvider>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

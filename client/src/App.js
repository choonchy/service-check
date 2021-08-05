import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleSearch from './pages/VehicleSearch';
import VehicleProvider from './utils/vehicleContext';
import UserInputProvider from './utils/userInputContext';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<UserInputProvider>
					<VehicleProvider>
						<Header />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/login">
								<LogIn />
							</Route>
							<Route exact path="/vehicle-search">
								<VehicleSearch />
							</Route>
						</Switch>
						<Footer />
					</VehicleProvider>
				</UserInputProvider>
			</Router>
		</ApolloProvider>
	);
}

export default App;

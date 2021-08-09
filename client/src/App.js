import React from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
import VehicleSearch from './pages/VehicleSearch';
import VehicleProvider from './utils/vehicleContext';
import UserInputProvider from './utils/userInputContext';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Orders from './pages/Orders';
import ProductProvider from './utils/productContext';
import UpdateUserInfo from './components/UpdateUserInfo';
import Auth from './utils/Auth';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = Auth.getToken();
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<UserInputProvider>
					<VehicleProvider>
						<ProductProvider>
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
								<Route exact path="/FAQ">
									<FAQ />
								</Route>
								<Route exact path="/about">
									<About />
								</Route>
								<Route exact path="/profile">
									<Profile />
								</Route>
								<Route exact path="/profile/update">
									<UpdateUserInfo />
								</Route>
								<Route exact path="/orders">
									<Orders />
								</Route>
							</Switch>
							<Footer />
						</ProductProvider>
					</VehicleProvider>
				</UserInputProvider>
			</Router>
		</ApolloProvider>
	);
}

export default App;

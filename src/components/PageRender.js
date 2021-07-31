import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home';

export default function PageRender() {
	return (
		<div>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

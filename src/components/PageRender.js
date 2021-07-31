import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './pages/Home';
import LogIn from './pages/LogIn';

export default function PageRender() {
	const [page, setPage] = useState('Home');

	const renderPage = () => {
		if (page === 'Home') {
			return <Home />;
		}
		if (page === 'LogIn') {
			return <LogIn />;
		}
	};

	const handlePageChange = (page) => setPage(page);

	return (
		<div>
			<Header currentPage={page} handlePageChange={handlePageChange} />
			<div>{renderPage()}</div>
			<Footer />
		</div>
	);
}

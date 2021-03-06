import React from 'react';
import Navbar from './Navbar';

export default function Header({ currentPage, handlePageChange }) {
	return (
		<header className="flex flex-wrap flex-row justify-between items-center md:space-x-4 bg-white py-6 px-6 sticky top-0 w-screen border-b-2 border-purple-100 shadow-md">
			<a href="/" className="block text-4xl text-purple-600">
				ServiceCheck
			</a>
			<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
			{/* <Cart /> */}
		</header>
	);
}

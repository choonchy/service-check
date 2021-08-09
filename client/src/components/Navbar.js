import React, { useState } from 'react';
import Auth from '../utils/Auth';

const Navbar = ({ currentPage, handlePageChange }) => {
	const [isOpen, setisOpen] = useState(false);
	const logout = (e) => {
		e.preventDefault();
		Auth.logout();
		window.location.pathname = '/';
	};

	function handleClick() {
		setisOpen(!isOpen);
	}

	return (
		<nav>
			<button type="button" className="block md:hidden" onClick={handleClick}>
				<svg
					className="h-6 w-6 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					{isOpen && (
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
						/>
					)}
					{!isOpen && (
						<path
							fillRule="evenodd"
							d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
						/>
					)}
				</svg>
			</button>
			<ul
				className={`md:flex  ${
					isOpen
						? 'block bg-white absolute box-content p-4 border-4 border-purple-100 right-6'
						: 'hidden'
				} `}
			>
				<li className="flex flex-col md:flex-row text-purple-600 items-center">
					<a
						href="/vehicle-search"
						className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
					>
						Search
					</a>
					<a
						href="/about"
						className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
					>
						About
					</a>
					<a
						href="/faq"
						className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
					>
						FAQ
					</a>
					{Auth.loggedIn() ? (
						<div className=" flex flex-col md:flex-row items-center">
							<a
								href="/profile"
								className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
							>
								Profile
							</a>
							<a
								href="/profile"
								onClick={logout}
								className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
							>
								Log Out
							</a>
						</div>
					) : (
						<a
							href="/login"
							className="m-1 p-2 hover:bg-purple-600 hover:text-white hover:shadow-inner duration-300 rounded-xl"
						>
							Log In/Sign Up
						</a>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

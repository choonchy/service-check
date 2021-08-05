import React, { useState } from 'react';
import UserSignUp from '../components/UserSignUp';

function LogIn() {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [duplicatePassword, setDuplicatePassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		// eslint-disable-next-line default-case
		if (name === 'email') {
			return setEmail(value);
		}
		if (name === 'firstName') {
			return setFirstName(value);
		}
		if (name === 'lastName') {
			return setLastName(value);
		}
		if (name === 'password') {
			return setPassword(value);
		}
		if (name === 'duplicatePassword') {
			return setDuplicatePassword(value);
		}
		if (name === 'loginEmail') {
			return setLoginEmail(value);
		}
		if (name === 'loginPassword') {
			return setLoginPassword(value);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert('Submitted successfully!');
		setEmail('');
		setFirstName('');
		setLastName('');
		setPassword('');
		setDuplicatePassword('');
	};

	return (
		<div>
			<div className="flex flex-col md:flex-row w-window items-center justify-center mt-4">
				<UserSignUp />
				<form className="flex flex-col w-10/12 md:5/12 items-center justify-center">
					<p classname="text-purple-600 mt-4">Already a customer?</p>
					<h2 className="text-4xl m-2">Log In</h2>
					<input
						className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
						value={loginEmail}
						name="loginEmail"
						onChange={handleInputChange}
						type="text"
						placeholder="Email Address"
					/>
					<input
						className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
						value={loginPassword}
						name="loginPassword"
						onChange={handleInputChange}
						type="text"
						placeholder="Password"
					/>
					<button
						type="button"
						onClick={handleFormSubmit}
						className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white"
					>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
}

export default LogIn;

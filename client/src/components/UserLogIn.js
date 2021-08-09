import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/Auth';

const UserLogIn = (props) => {
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	const [login, { error, data }] = useMutation(LOGIN_USER);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		console.log(formState);
		try {
			const { data } = await login({
				variables: { email: formState.email, password: formState.password },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		setFormState({
			email: '',
			password: '',
		});
	};

	return (
		<div className="flex mb-20 flex-col w-10/12 md:5/12 items-center justify-center">
			{data ? (
				<p className="my-4 text-center p-2 bg-green-100 text-green-600 rounded-xl">
					Logged in successfully!
				</p>
			) : (
				<form className="flex flex-col w-10/12 md:5/12 items-center justify-center">
					<p className="text-purple-600 mt-4">Already a customer?</p>
					<h2 className="text-4xl m-2">Log In</h2>
					{error ? (
						<p className="my-4 text-center p-2 bg-red-100 text-red-600 rounded-xl">
							{error.message}
						</p>
					) : (
						''
					)}
					<input
						className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
						value={formState.email}
						name="email"
						onChange={handleInputChange}
						type="email"
						placeholder="Email Address"
					/>
					<input
						className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
						value={formState.password}
						name="password"
						onChange={handleInputChange}
						type="password"
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
			)}
		</div>
	);
};

export default UserLogIn;

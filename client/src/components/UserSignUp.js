import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/Auth';

const UserSignUp = () => {
	const [formState, setFormState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		duplicatePassword: '',
	});
	const [addUser, { error, data }] = useMutation(ADD_USER);

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

		if (formState.password === formState.duplicatePassword) {
			try {
				const { data } = await addUser({
					variables: {
						fullName: `${formState.firstName} ${formState.lastName}`,
						email: formState.email,
						password: formState.password,
					},
				});

				console.log(data);

				Auth.login(data.addUser.token);
			} catch (e) {
				console.error(e);
			}
		}
	};
	return (
		<form className="flex flex-col w-10/12 md:5/12 items-center justify-center border-b-2 border-purple-100 md:border-b-0 md:border-r-2 pb-2 mb-2">
			<p classname="text-purple-600 mt-4">New to ServiceCheck™?</p>
			<h2 className="text-4xl m-2">Sign Up</h2>
			<input
				className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
				value={formState.firstName}
				name="firstName"
				onChange={handleInputChange}
				type="text"
				placeholder="First Name"
			/>
			<input
				className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
				value={formState.lastName}
				name="lastName"
				onChange={handleInputChange}
				type="text"
				placeholder="Last Name"
			/>
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
				placeholder="Password (8 characters or more)"
			/>
			<input
				className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
				value={formState.duplicatePassword}
				name="duplicatePassword"
				onChange={handleInputChange}
				type="password"
				placeholder="Repeat Password"
			/>
			{formState.password !== formState.duplicatePassword ? (
				<p className="bg-red-100 text-center rounded-2xl w-6/12 md:w-4/12 p-3 m-1 text-red-600">
					Passwords must match!
				</p>
			) : (
				<button
					type="button"
					onClick={handleFormSubmit}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-4/12 p-3 m-1 text-white"
				>
					Sign Up
				</button>
			)}
		</form>
	);
};

export default UserSignUp;

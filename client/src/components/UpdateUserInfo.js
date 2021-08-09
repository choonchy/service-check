import React, { useState } from 'react';
import Auth from '../utils/Auth';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

export default function UpdateUserInfo() {
	const [updateUser] = useMutation(UPDATE_USER);

	const { data: userData } = Auth.getProfile();

	const [formState, setFormState] = useState({
		fullName: userData.fullName,
		email: userData.email,
	});

	if (!Auth.loggedIn()) {
		return window.location.assign('/');
	}

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
			const { data } = await updateUser({
				variables: {
					fullName: formState.fullName,
					email: formState.email,
				},
			});
			console.log(data);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<form className="flex flex-col w-10/12 md:5/12 items-center justify-center border-b-2 border-purple-100 md:border-b-0  pb-2 mb-2">
				<h2 className="text-4xl m-2 p-4 text-purple-600">Update details</h2>
				<input
					className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
					value={formState.fullName}
					name="fullName"
					onChange={handleInputChange}
					type="text"
					placeholder="Full Name"
				/>
				<input
					className="w-11/12 md:w-5/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
					value={formState.email}
					name="email"
					onChange={handleInputChange}
					type="email"
					placeholder="Email Address"
				/>
				<button
					type="button"
					onClick={handleFormSubmit}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-4/12 p-3 m-1 text-white"
				>
					Update
				</button>
			</form>
		</div>
	);
}

import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { QUERY_SINGLE_VEHICLE } from '../utils/queries';

function VehicleSearch() {
	const { loading, data } = useQuery(QUERY_SINGLE_VEHICLE);
	const vehicle = data?.vehicle;
	const [userInput, setUserInput] = useState('');

	const handleInputChange = (e) => {
		const { value } = e.target;

		return setUserInput(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert('Submitted successfully!');
		setUserInput('');
	};
	return (
		<div>
			<form className="flex flex-col items-center md:w-6/12 m-2">
				<input
					className="w-11/12 md:w-9/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
					value={userInput}
					name="userInput"
					onChange={handleInputChange}
					type="text"
					placeholder="Enter vehicle VIN or Rego Number"
				/>
				<button
					type="button"
					onClick={handleFormSubmit}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white"
				>
					Search
				</button>
			</form>
		</div>
	);
}

export default VehicleSearch;

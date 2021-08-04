import { useLazyQuery } from '@apollo/client';
import React, { useState, useEffect, createContext } from 'react';
import VehicleList from '../components/VehicleList';
import { QUERY_SINGLE_VEHICLE } from '../utils/queries';

export const vehicleContext = createContext();

export default function VehicleSearch() {
	const [executeSearch, { loading, data }] = useLazyQuery(QUERY_SINGLE_VEHICLE);

	const [userInput, setUserInput] = useState('');
	const [vehicle, setVehicle] = useState({});

	useEffect(() => {
		setVehicle(data?.vehicle);
		console.log(vehicle);
	}, [data, vehicle]);

	const handleInputChange = (e) => {
		const { value } = e.target;
		return setUserInput(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(userInput);
		executeSearch({
			variables: {
				vin: userInput,
			},
		});
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
					placeholder="Enter VIN"
				/>
				<button
					type="submit"
					value="Submit"
					className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white hover:bg-purple-400 cursor-pointer"
					onClick={handleFormSubmit}
				>
					Submit
				</button>
			</form>
			<vehicleContext.Provider value={vehicle}>
				{!loading ? <VehicleList /> : <p>Loading...</p>}
			</vehicleContext.Provider>
		</div>
	);
}

import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_VEHICLE } from '../utils/queries';
import { useVehicleContext } from '../utils/vehicleContext';

function VehicleSearch() {
	const [userInput, setUserInput] = useState('');

	const [executeSearch, { data }] = useLazyQuery(QUERY_SINGLE_VEHICLE);

	const { vehicle, setVehicle } = useVehicleContext();

	useEffect(() => {
		setVehicle(data?.vehicle);
		console.log(vehicle);
	}, [data, vehicle, setVehicle]);

	const searchVehicle = (vin) => {
		executeSearch({
			variables: {
				vin,
			},
		});
		console.log(data);
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		return setUserInput(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(userInput);
		searchVehicle(userInput);
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
			{!vehicle ? (
				<p>No vehicles found</p>
			) : (
				<div>
					<p>{vehicle.vin}</p>
					<p>{vehicle.make}</p>
					<p>{vehicle.model}</p>
				</div>
			)}
		</div>
	);
}

export default VehicleSearch;

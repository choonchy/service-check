import React, { useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_VEHICLE } from '../utils/queries';
import { useVehicleContext } from '../utils/vehicleContext';
import VehicleCard from '../components/VehicleCard';
import { useUserInputContext } from '../utils/userInputContext';

import ProductList from '../components/ProductList';

function VehicleSearch() {
	const { userInput, setUserInput } = useUserInputContext();

	const { vehicle, setVehicle } = useVehicleContext();

	const [executeSearch, { loading, data }] = useLazyQuery(QUERY_SINGLE_VEHICLE);

	const userInputRef = useRef(userInput);

	useEffect(() => {
		if (userInputRef.current) {
			searchVehicle(userInputRef.current);
		}
	}, []);

	useEffect(() => {
		setVehicle(data?.vehicle);
	}, [data, setVehicle]);

	const searchVehicle = (vin) => {
		executeSearch({
			variables: {
				vin: vin,
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
		searchVehicle(userInput);
		console.log(userInput);
	};

	return (
		<div className="mt-16 w-screen flex flex-col justify-center items-center h-4/6">
			<form className="flex flex-col items-center justify-center md:w-6/12 m-2">
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
			{!loading ? (
				!vehicle ? (
					!userInput ? (
						<p className="text-red-600">
							No results found for this VIN number.
						</p>
					) : (
						''
					)
				) : (
					<div className="flex flex-col items-center">
						<VehicleCard />
						<ProductList />
					</div>
				)
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default VehicleSearch;

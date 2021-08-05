import React from 'react';
import { useVehicleContext } from '../utils/vehicleContext';
import { useUserInputContext } from '../utils/userInputContext';
import { useHistory } from 'react-router-dom';

function Home() {
	const history = useHistory();
	const { vehicle, setVehicle } = useVehicleContext();

	const { userInput, setUserInput } = useUserInputContext();

	const handleInputChange = (e) => {
		const { value } = e.target;
		return setUserInput(value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		history.push('/vehicle-search');
		console.log(userInput);
		setVehicle(userInput);
	};

	return (
		<div className="mt-8 mb-32 md:my-32">
			<h2 className="m-2 text-3xl text-purple-500 text-center mb-12">
				Welcome to ServiceCheck™
			</h2>
			<div className="flex flex-col items-center justify-center m-3 md:flex-row md:h-1/4">
				<section className="md:w-5/12">
					<p className="m-2 text-center text-purple-600 italic border-b-2 border-purple-100 p-2">
						When life gives you lemons, make sure you don't buy one!
					</p>
					<p className="m-2 text-center">
						Using our platform, you can be assured that the vehicle you
						purchased has been well maintained and won't leave you with any
						nasty surprises
					</p>
				</section>
				<form className="flex flex-col items-center md:w-5/12 m-2">
					<input
						className="w-11/12 md:w-9/12 bg-purple-100 rounded-2xl text-center p-3 m-1"
						value={userInput}
						name="userInput"
						onChange={handleInputChange}
						type="text"
						placeholder="Enter VIN"
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
			<div className="pt-8 w-window flex flex-col items-center border-t-2 border-purple-100">
				<p className="m-2 text-center text-2xl text-purple-600">
					Our vehicle service history searches are:
				</p>
				<ul className="m-2 text-center italic">
					<li>Fast</li>
					<li>Convenient</li>
					<li>Easy-to-use</li>
					<li>Accurate</li>
				</ul>
				<h2 className="text-center text-4xl m-2 text-purple-600">
					Trusted by sellers, purchasers, and automotive professionals.
				</h2>
			</div>
		</div>
	);
}

export default Home;

import React from 'react';

import { useVehicleContext } from '../utils/vehicleContext';

const VehicleCard = () => {
	const { vehicle } = useVehicleContext();

	return (
		<div className="flex flex-col justify-center items-center m-4 shadow-md border-t-2 border-purple-100 w-5/6 md:w-3/6 h-4/6">
			<div className="text-center m-1">
				<h3 className="p-1">Vehicles</h3>
			</div>
			<div className="text-center m-1">
				<p className="p-1">VIN: {vehicle.vin}</p>
				<p className="p-1">Make: {vehicle.make}</p>
				<p className="p-1">Model: {vehicle.model}</p>
				<p className="p-1">Colour: {vehicle.colour}</p>
			</div>
			<div className="text-center m-1 flex flex-row">
				<p className="p-1">$12.00</p>
				<button>Add to cart</button>
			</div>
		</div>
	);
};

export default VehicleCard;

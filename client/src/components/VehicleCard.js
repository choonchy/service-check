import React from 'react';

import { useVehicleContext } from '../utils/vehicleContext';

const VehicleCard = () => {
	const { vehicle } = useVehicleContext();

	return (
		<div className="flex flex-col justify-center items-center m-4 shadow-md border-t-2 border-purple-100 w-5/6 md:w-3/6 h-4/6">
			<div className="text-center m-1">
				<h3 className="p-1 text-3xl text-purple-600">Vehicle Found</h3>
			</div>
			<div className="text-center m-1">
				<p className="p-1">
					<span className="text-purple-600 font-bold">{`VIN: `}</span>
					{vehicle.vin}
				</p>
				<p className="p-1">
					<span className="text-purple-600 font-bold">{`Make: `}</span>
					{vehicle.make}
				</p>
				<p className="p-1">
					<span className="text-purple-600 font-bold">{`Model: `}</span>
					{vehicle.model}
				</p>
				<p className="p-1">
					<span className="text-purple-600 font-bold">{`Colour: `}</span>
					{vehicle.colour}
				</p>
			</div>
			<div className="text-center m-1 text-purple-600 bold text-xl flex items-center flex-row mb-4">
				<p className="p-3 bg-purple-100 rounded-l-2xl">$12.00</p>
				<button className="p-3 bg-purple-600 text-white rounded-r-2xl">
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default VehicleCard;

import React, { useContext } from 'react';
import { vehicleContext } from '../pages/VehicleSearch';

const VehicleList = () => {
	const vehicle = useContext(vehicleContext);
	console.log(vehicle);
	const vehicleRender = (vehicle) => {
		if (!vehicle) {
			return null;
		}
		if (vehicle) {
			return (
				<div>
					<p>{vehicle.vin}</p>
					<p>{vehicle._id}</p>
				</div>
			);
		}
	};

	return (
		<div>
			<h3>Vehicles</h3>
			<div>{() => vehicleRender(vehicle)}</div>
		</div>
	);
};

export default VehicleList;

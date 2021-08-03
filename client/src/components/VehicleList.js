import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VEHICLES } from '../utils/queries';

const VehicleList = () => {
	const { loading, data } = useQuery(QUERY_VEHICLES);
	console.log(data);
	const vehicles = data?.vehicles || 'No vehicles found';
	console.log(vehicles);
	if (!vehicles.length) {
		return <h3>No vehicles yet!</h3>;
	}

	return (
		<div>
			<h3>Vehicles</h3>
			<div>
				{!loading ? (
					vehicles.map((vehicle) => (
						<div key={vehicle._id}>
							<p>{vehicle.vin}</p>
							<p>{vehicle.regoNumber}</p>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default VehicleList;

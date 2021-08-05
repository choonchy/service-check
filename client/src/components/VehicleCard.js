import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_SINGLE_VEHICLE } from '../utils/queries';
import { useVehicleContext } from '../utils/vehicleContext';

const VehicleCard = () => {
	const { searchResult, setSearchResult } = useState(false);

	const renderVehicle = () => {
		if (searchResult) {
			return <div></div>;
		}
	};

	return (
		<div>
			<h3>Vehicles</h3>
		</div>
	);
};

export default VehicleCard;

import React, { useState, useContext } from 'react';

export const VehicleContext = React.createContext();

export const useVehicleContext = () => useContext(VehicleContext);

const VehicleProvider = (props) => {
	const [vehicle, setVehicle] = useState('');

	return (
		<VehicleContext.Provider
			value={{ vehicle: vehicle, setVehicle }}
			{...props}
		/>
	);
};

export default VehicleProvider;

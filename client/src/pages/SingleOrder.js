import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_ORDER } from '../utils/queries';
import ServiceHistory from '../components/ServiceHistory';

export default function SingleOrder() {
	const params = useParams();
	const { loading, data } = useQuery(QUERY_SINGLE_ORDER, {
		variables: { _id: params.id },
	});
	console.log(data);
	if (loading || !data) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col items-center text-center mt-8 mb-20">
			<p
				onClick={() => window.location.assign('/orders')}
				className="cursor-pointer"
			>{`<- Back`}</p>
			<h2 className="text-2xl mb-3 text-purple-600">Order ID: {params.id}</h2>
			<div className="text-center shadow text-sm md:text-base md:w-8/12 m-2">
				<h3 className="m-2 text-xl text-purple-600 border-b-2 pb-2">
					Vehicle Details
				</h3>
				<div className="text-center flex flex-row justify-evenly">
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Vehicle VIN</h4>
						<p>{data.order.vehicle.vin}</p>
					</div>
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Make</h4>
						<p>{data.order.vehicle.make}</p>
					</div>
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Model</h4>
						<p>{data.order.vehicle.model}</p>
					</div>
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Colour</h4>
						<p>{data.order.vehicle.colour}</p>
					</div>
				</div>
			</div>
			<ServiceHistory history={data.order.vehicle.serviceHistory} />
		</div>
	);
}

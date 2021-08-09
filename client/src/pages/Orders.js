import React from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

export default function Orders() {
	const { loading, data } = useQuery(QUERY_SINGLE_USER);

	if (loading || !data) {
		return <p>Loading...</p>;
	}

	console.log(data.currentUser.orders);

	return (
		<div className="flex flex-col justify-center items-center mt-8 ">
			<h2 className="p-4 text-4xl text-purple-600 mb-4">Order History</h2>
			{data.currentUser.orders.map((order) => {
				let date = new Date(+order.orderDate);
				console.log(date);
				return (
					<div
						key={order._id}
						onClick={() => {
							window.location.assign(`/orders/${order._id}`);
						}}
						className="flex flex-row shadow p-3 m-2 w-10/12 md:w-6/12 items-center text-center justify-center cursor-pointer hover:bg-purple-100 hover:shadow-xl rounded-xl duration-200"
					>
						<div className="flex flex-col w-6/12 m-2 p-2">
							<p className="text-purple-600 font-bold">Order Date</p>
							<p>{date.toLocaleDateString()}</p>
						</div>
						<div className="flex flex-col w-6/12">
							<p className="text-purple-600 font-bold">Vehicle VIN</p>
							<p>{order.vehicle.vin}</p>
						</div>
						<div></div>
					</div>
				);
			})}
		</div>
	);
}

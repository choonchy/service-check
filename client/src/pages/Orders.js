import React from 'react';
import Auth from '../utils/Auth';
import { QUERY_ORDERS, QUERY_SINGLE_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

export default function Orders() {
	const { loading, data } = useQuery(QUERY_SINGLE_USER);

	if (loading || !data) {
		return <p>Loading...</p>;
	}

	console.log(data);

	return (
		<div>
			<p>Hello world!</p>
		</div>
	);
}

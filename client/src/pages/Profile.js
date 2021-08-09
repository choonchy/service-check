import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { QUERY_SINGLE_USER } from '../utils/queries';
import Auth from '../utils/Auth';
import { useRouteMatch } from 'react-router';

export default function Profile() {
	let { path, url } = useRouteMatch();
	const { loading, data } = useQuery(QUERY_SINGLE_USER);

	if (!Auth.loggedIn()) {
		return window.location.assign('/');
	}

	if (loading || !data) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<div className="h-1/6 shadow-lg p-14 text-2xl">
				<h3 className="text-center">
					Welcome to Service Check™,{` `} <br />
					<span className="text-purple-600">{data.currentUser.fullName}.</span>
				</h3>
			</div>
			<div className="flex flex-col items-center m-2">
				<button
					onClick={() => window.location.assign('/orders')}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white hover:bg-purple-400 cursor-pointer"
				>
					View orders
				</button>
				<button
					onClick={() => window.location.assign('/profile/update')}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white hover:bg-purple-400 cursor-pointer"
				>
					Change details
				</button>
				<button
					onClick={() => Auth.logout()}
					className="bg-purple-600 rounded-2xl w-6/12 md:w-3/12 p-3 m-1 text-white hover:bg-purple-400 cursor-pointer"
				>
					Log Out
				</button>
			</div>
		</div>
	);
}

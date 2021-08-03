import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const UserList = () => {
	const { loading, data } = useQuery(QUERY_USERS);
	console.log(data);
	const users = data?.users || 'No users found';
	console.log(users);
	if (!users.length) {
		return <h3>No users yet!</h3>;
	}

	return (
		<div>
			<h3>Users</h3>
			<div>
				{!loading ? (
					users.map((user) => (
						<div key={user._id}>
							<p>{user.fullName}</p>
							<p>{user.email}</p>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default UserList;

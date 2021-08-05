import React, { useState } from 'react';
import UserSignUp from '../components/UserSignUp';
import UserLogIn from '../components/UserLogIn';

function LogIn() {
	return (
		<div>
			<div className="flex flex-col md:flex-row w-window items-center justify-center mt-4">
				<UserSignUp />
				<UserLogIn />
			</div>
		</div>
	);
}

export default LogIn;

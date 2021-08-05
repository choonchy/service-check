import React, { useState, useContext } from 'react';

export const UserInputContext = React.createContext();

export const useUserInputContext = () => useContext(UserInputContext);

const UserInputProvider = (props) => {
	const [userInput, setUserInput] = useState('');

	return (
		<UserInputContext.Provider
			value={{ userInput: userInput, setUserInput }}
			{...props}
		/>
	);
};

export default UserInputProvider;

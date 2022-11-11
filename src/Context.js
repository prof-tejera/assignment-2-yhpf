import React, { useState } from "react";

// https://www.geeksforgeeks.org/how-to-share-state-across-react-components-with-context/
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [timerList, setTimerList] = useState([]);

	return (
		<Context.Provider value={{ timerList, setTimerList }}>
    		{children}
		</Context.Provider>
	);
};

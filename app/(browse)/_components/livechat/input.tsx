import React from "react";

export const LiveTextField = () => {
	return (
		<div className="fixed bottom-8 ml-3 w-full max-w-md mx-auto">
			<input
				type="text"
				placeholder="Type your message..."
				className={`
							w-[380px]
							h-10 
							px-2  
							rounded-md 
							bg-gray-700 
							border-solid
							border-2 
							border-white
							text-white 
							focus:outline-none
							focus:border-none 
							focus:ring-2 focus:ring-indigo-400
							focus:ring-opacity-80 
							`}
			/>
		</div>
	);
};

export default LiveTextField;

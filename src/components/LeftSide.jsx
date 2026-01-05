import React from "react";

const LeftSide = ({ news }) => {
	console.log(news);
	return (
		<div>
			<h2 className="text-xl font-bold mb-5 flex items-center gap-2">
				<span className="w-1 h-6 bg-primary rounded-full"></span>Latest
				News
			</h2>
		</div>
	);
};

export default LeftSide;

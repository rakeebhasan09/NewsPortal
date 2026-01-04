import moment from "moment";
import React from "react";

const TopHeader = () => {
	return (
		<div className="bg-primary py-2">
			<div className="container">
				<div className="flex items-center justify-between text-sm text-white">
					<span className="hidden sm:block">
						{moment().format("dddd, MMMM D, YYYY")}
					</span>
					<span className="sm:hidden text-xs">
						{moment().format("MMM D, YYYY")}
					</span>
					<span className="text-xs sm:text-sm font-medium">
						Breaking News • Latest Updates
					</span>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;

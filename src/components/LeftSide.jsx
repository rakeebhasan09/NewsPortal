import React from "react";
import NewaCard from "./cards/NewaCard";

const LeftSide = ({ activeCategory, filteredNews }) => {
	return (
		<div>
			<h2
				className={`text-xl font-bold flex items-center gap-2 ${
					activeCategory === "Home" && "mb-5"
				}`}
			>
				{activeCategory === "Home" && (
					<span className="w-1 h-6 bg-primary rounded-full"></span>
				)}

				{activeCategory === "Home" ? "Latest News" : activeCategory}
			</h2>
			<p class="text-(--color-muted-foreground) mb-4">
				{activeCategory === "Home" ||
					`${filteredNews.length} articles found`}
				{}
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				{filteredNews.map((singleNews) => (
					<NewaCard key={singleNews.id} singleNews={singleNews} />
				))}
			</div>
		</div>
	);
};

export default LeftSide;

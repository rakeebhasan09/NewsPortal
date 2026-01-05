import { Clock } from "lucide-react";
import { Link } from "react-router";

const NewaCard = ({ singleNews }) => {
	return (
		<Link to={`/news/${singleNews.id}`}>
			<div className="w-full overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
				{/* Image */}
				<div className="relative h-48 w-full">
					<img
						src={singleNews.image}
						alt={singleNews.title}
						className="h-full w-full object-cover"
					/>

					{/* Category */}
					<span className="absolute left-3 top-3 rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur">
						{singleNews.category}
					</span>
				</div>

				{/* Content */}
				<div className="p-4">
					{/* Title */}
					<h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
						{singleNews.title}
					</h3>

					{/* Description */}
					<p className="mt-2 line-clamp-2 text-sm text-gray-600">
						{singleNews.description}
					</p>

					{/* Meta */}
					<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
						<span className="flex items-center gap-1">
							<Clock size={16} />
							{singleNews.readTime} min
						</span>

						<span>•</span>

						<span>
							{new Date(
								singleNews.publishedAt
							).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default NewaCard;

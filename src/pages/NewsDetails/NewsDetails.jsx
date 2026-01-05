import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

const NewsDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	return (
		<div className="container">
			<div className="pt-8">
				{/* Back Button */}
				<button
					onClick={() => navigate(-1)}
					className="btn btn-primary btn-outline inline-flex items-center gap-2 text-(--color-muted-foreground) hover:text-white mb-6 transition-colors"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to News
				</button>
				<div>news details for {id}</div>
			</div>
		</div>
	);
};

export default NewsDetails;

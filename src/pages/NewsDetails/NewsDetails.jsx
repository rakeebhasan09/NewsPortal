import React from "react";
import { useParams } from "react-router";

const NewsDetails = () => {
	const { id } = useParams();
	return <div className="container">news details for {id}</div>;
};

export default NewsDetails;

import React, { useState, useEffect } from "react";

interface RecommendationProps {
	studentId: string;
}

function RecommendationComponent({ studentId }: RecommendationProps) {
	const [recommendation, setRecommendation] = useState("");
	const [strengths, setStrengths] = useState("");
	const [weaknesses, setWeaknesses] = useState("");
	const endpointUrl = " http://127.0.0.1:5000/grademate/evaluate";

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			const requestData = {
				userId: studentId,
			};

			const response = await fetch(endpointUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(requestData),
			});
			const data = await response.json();
			setRecommendation(data.recommendation);
			setStrengths(data.strengths);
			setWeaknesses(data.weaknesses);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div className="mt-12">
			<h2 className="text-white text-2xl font-bold mb-4">Analysis</h2>
			<div className="p-4 border rounded-lg shadow-sm bg-gray-50 text-justify">
				<p>
					{" "}
					<strong>Strengths:</strong>
					<br />
					{strengths}
					<br />
					<br />
					<strong>Weaknesses:</strong>
					<br />
					{weaknesses}
					<br />
					<br />
					<strong>Recommendation:</strong>
					<br />
					{recommendation}
				</p>
			</div>
		</div>
	);
}

export default RecommendationComponent;

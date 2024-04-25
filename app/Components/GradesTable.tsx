import React from "react";

const GradesTable = ({ grades }) => {
  return (
    <div className="bg-purple-800 p-4 rounded-lg shadow-md">
      <div className="flex justify-between text-purple-200 py-2 border-b border-purple-300">
        <div>Assessments</div>
        <div>Grades</div>
      </div>
      {grades.map((grade, index) => (
        <div
          key={index}
          className="flex justify-between text-white py-2 border-b border-purple-300"
        >
          <div>{grade.assessment}</div>
          <div>{grade.score}</div>
        </div>
      ))}
    </div>
  );
};

export default GradesTable;

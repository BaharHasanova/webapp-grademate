import React from "react";

const GradesTable = ({ grades }) => {
  return (
    <div className="bg-purple-800 p-4 rounded-lg shadow-md overflow-x-auto">
      <div className="flex justify-between text-white py-2 px-4 border-b border-purple-600">
        <div className="w-1/3">Assessments</div>
        <div className="w-1/3">Max Grade</div>
        <div className="w-1/3">Achieved Grade</div>
      </div>
      {grades.map((grade, index) => (
        <div
            key={grade.assessment_id || index}  // Assuming each grade has a unique assessment_id
            className={`flex justify-between text-white py-2 px-4 ${
                index % 2 ? "bg-purple-700" : "bg-purple-800"
            }`}
        >
            <div className="w-1/3">{grade.type}</div>
            <div className="w-1/3">{grade.max_grade}</div>
            <div className="w-1/3">{grade.achievedGrade}%</div>
        </div>
      ))}
    </div>
  );
};

export default GradesTable;

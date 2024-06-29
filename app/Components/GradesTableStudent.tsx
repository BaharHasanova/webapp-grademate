import React from "react";

const GradesTableStudent = ({ grades, onGradeChange, saveGradeForRow }) => {
  return (
    <div className="bg-purple-800 p-4 rounded-lg shadow-md overflow-x-auto">
      <div className="flex justify-between text-white py-2 px-4 border-b border-purple-600">
        <div className="w-1/3">Assessments</div>
        <div className="w-1/3">Max Grade</div>
        <div className="w-1/3">Achieved Grade</div>
      </div>
      {grades.map((grade, index) => (
        <div key={index} className={`flex justify-between text-white py-2 px-4 ${index % 2 ? "bg-purple-700" : "bg-purple-800"}`}>
          <div className="w-1/3">{grade.type}</div>
          <div className="w-1/3">{grade.max_grade}</div>
          <div className="w-1/3 flex items-center">
          <input
              type="text"
              value={grade.achievedGrade}
              onChange={(e) => onGradeChange(index, e.target.value)}
              className="bg-transparent text-center w-full"
            />
            <button
              onClick={() => saveGradeForRow(index)}
              className="ml-2 bg-buttonPurple hover:bg-buttonOrange text-white font-bold py-1 px-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradesTableStudent;


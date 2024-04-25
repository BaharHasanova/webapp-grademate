import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GradePercentage = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        textColor: "white",
        pathColor: "orange", // Adjust color as needed
        trailColor: "darkgrey", // Adjust color as needed
      })}
    />
  );
};

export default GradePercentage;

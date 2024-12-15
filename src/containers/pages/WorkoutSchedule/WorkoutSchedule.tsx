import { StyleWorkoutScheduleWrapper } from "./WorkoutSchedule.styled";
import Week from "./Week/Week";
import { useEffect } from "react";
import { getWeekData } from "../../../data/data";
import useData from "../../../hooks/useData";

const WorkoutSchedule: React.FC = () => {
  const { dispatch } = useData();

  useEffect(() => {
    const weekData = getWeekData(new Date());
    dispatch({ type: "LOAD_DATA", payload: weekData });
  }, [dispatch]);

  return (
    <StyleWorkoutScheduleWrapper>
      <Week />
    </StyleWorkoutScheduleWrapper>
  );
};

export default WorkoutSchedule;

import {
  StyledWeekDayContent,
  StyledWeekDayHeader,
  StyledWeekDayTitle,
  StyledWeekDayWrapper,
} from "./WeekDay.styled";
import { getDateData } from "../../../../../utils/dateTime";
import IconButton from "../../../../../components/Button/IconButton";
import Workout from "../../Workout/Workout";
import { useWorkoutDrop } from "../../../../../hooks/useWorkoutDrogAndDrag";
import type { IWorkout } from "../../../../../data/data";

type WeekDayProps = {
  day: Date;
  workouts: IWorkout[];
  addable?: boolean;
};

const WeekDay: React.FC<WeekDayProps> = ({ day, addable, workouts }) => {
  const dayData = getDateData(day);

  const addWorkoutHandler = () => {
    alert("not implemented");
  };

  const [{ isWorkoutDropOver }, weekdayDropRef] = useWorkoutDrop(
    dayData.weekDay,
  );

  return (
    <StyledWeekDayWrapper
      ref={weekdayDropRef}
      style={{
        backgroundColor: isWorkoutDropOver ? "var(--bg-hightlight)" : undefined,
      }}
    >
      <StyledWeekDayHeader>{dayData.weekDay.toUpperCase()}</StyledWeekDayHeader>
      <StyledWeekDayContent>
        <StyledWeekDayTitle $isActive={dayData.isToday}>
          {dayData.monthDay}
          {addable && (
            <IconButton
              variant="contained"
              icon="+"
              onClick={addWorkoutHandler}
            />
          )}
        </StyledWeekDayTitle>
        {workouts.map((workout) => (
          <Workout day={dayData.weekDay} key={workout.id} workout={workout} />
        ))}
      </StyledWeekDayContent>
    </StyledWeekDayWrapper>
  );
};

export default WeekDay;

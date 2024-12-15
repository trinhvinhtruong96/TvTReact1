import WeekDay from "./WeekDay/WeekDay";
import { StyleWeekWrapper } from "./Week.styled";
import { getCurrentWeek, getDateData } from "../../../../utils/dateTime";
import useData from "../../../../hooks/useData";

const Week = () => {
  const {
    state: { weekData },
  } = useData();

  const currentWeekDays = getCurrentWeek();

  const currentDateWithData = currentWeekDays.map((day) => {
    const dateData = getDateData(day);

    const workouts =
      weekData.find((data) => data.day === dateData.weekDay)?.workouts ?? [];

    return {
      day,
      workouts,
    };
  });

  return (
    <StyleWeekWrapper>
      {currentDateWithData.map(({ day, workouts }, index) => {
        return (
          <WeekDay
            key={day.toDateString()}
            day={day}
            workouts={workouts}
            addable={index % 2 === 0}
          />
        );
      })}
    </StyleWeekWrapper>
  );
};

export default Week;

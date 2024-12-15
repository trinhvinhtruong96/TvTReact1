import {
  StyleWorkoutContent,
  StyleWorkoutFooter,
  StyleWorkoutHeader,
  StyleWorkoutWrapper,
} from "./Workout.styled";
import Typography from "../../../../components/Typography/Typography";
import IconButton from "../../../../components/Button/IconButton";
import Exercise from "./Exercise/Exercise";
import type { Day, IWorkout } from "../../../../data/data";
import { useExerciseDrop } from "../../../../hooks/useExerciseDropAndDrag";
import { useWorkoutDrag } from "../../../../hooks/useWorkoutDrogAndDrag";

type WorkoutProps = {
  workout: IWorkout;
  day: Day;
};

const Workout: React.FC<WorkoutProps> = ({ workout, day }) => {
  const [{ isWorkoutDragging }, workoutDragRef] = useWorkoutDrag(
    workout.id,
    day,
  );
  const [{ isExerciseDropOver }, workoutDropRef] = useExerciseDrop(workout.id);

  const addExerciseHandler = () => {
    alert("not implemented");
  };

  const openMenuHandler = () => {
    alert("not implemented");
  };

  const workoutWrapperHandler = (element: HTMLElement) => {
    workoutDragRef(element);
    workoutDropRef(element);
  };

  return (
    <StyleWorkoutWrapper
      ref={workoutWrapperHandler}
      style={{
        opacity: isWorkoutDragging ? 0.5 : undefined,
        borderWidth: isExerciseDropOver
          ? "2px solid var(--hightlight)"
          : undefined,
      }}
    >
      <StyleWorkoutHeader>
        <Typography variant="h5">{workout.name}</Typography>
        <IconButton variant="icon" icon="..." onClick={openMenuHandler} />
      </StyleWorkoutHeader>
      <StyleWorkoutContent>
        {workout.exercises.map((exercise) => (
          <Exercise
            workoutId={workout.id}
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </StyleWorkoutContent>
      <StyleWorkoutFooter>
        <IconButton variant="contained" icon="+" onClick={addExerciseHandler} />
      </StyleWorkoutFooter>
    </StyleWorkoutWrapper>
  );
};

export default Workout;

import {
  StyledExerciseDetail,
  StyledExerciseHeader,
  StyledExerciseWrapper,
} from "./Exercise.styled";
import Typography from "../../../../../components/Typography/Typography";
import type { IExercise } from "../../../../../data/data";
import { useExerciseDrag } from "../../../../../hooks/useExerciseDropAndDrag";

type ExerciseProps = {
  exercise: IExercise;
  workoutId: number;
};

const Exercise: React.FC<ExerciseProps> = ({ exercise, workoutId }) => {
  const [{ isExerciseDragging: isExerciseDragging }, exerciseRef] =
    useExerciseDrag(exercise?.id, workoutId);

  return (
    <StyledExerciseWrapper
      ref={exerciseRef}
      style={{ opacity: isExerciseDragging ? 0.5 : undefined }}
    >
      <StyledExerciseHeader>
        <Typography variant="h6">{exercise.name}</Typography>
      </StyledExerciseHeader>
      <StyledExerciseDetail>
        <Typography variant="body1">{exercise.sets}x</Typography>
        <Typography variant="body2">{exercise.details}</Typography>
      </StyledExerciseDetail>
    </StyledExerciseWrapper>
  );
};

export default Exercise;

// src/hooks/useExerciseDrop.ts
import { useDrop } from "react-dnd";
import useData from "./useData";

import { useDrag } from "react-dnd";

export type ExerciseDragItem = {
  id: number;
  workoutId: number;
};

export const useExerciseDrag = (exerciseId: number, workoutId: number) => {
  return useDrag<ExerciseDragItem, unknown, { isExerciseDragging: boolean }>({
    type: "exercise",
    item: { id: exerciseId, workoutId },
    collect: (monitor) => ({
      isExerciseDragging: monitor.isDragging(),
    }),
  });
};

export const useExerciseDrop = (workoutId: number) => {
  const { dispatch } = useData();

  return useDrop<ExerciseDragItem, void, { isExerciseDropOver: boolean }>({
    accept: "exercise",
    drop: (item) => {
      dispatch({
        type: "MOVE_EXERCISE",
        payload: {
          exerciseId: item.id,
          fromWorkoutId: item.workoutId,
          toWorkoutId: workoutId,
        },
      });
    },
    collect: (monitor) => ({
      isExerciseDropOver: monitor.isOver(),
    }),
  });
};

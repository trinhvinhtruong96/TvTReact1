import { useDrag, useDrop } from "react-dnd";
import type { Day } from "../data/data";
import useData from "./useData";

export type WorkoutDragItem = {
  id: number;
  day: Day;
};

export const useWorkoutDrag = (workoutId: number, day: Day) => {
  return useDrag<WorkoutDragItem, unknown, { isWorkoutDragging: boolean }>({
    type: "workout",
    item: { id: workoutId, day },
    collect: (monitor) => ({
      isWorkoutDragging: monitor.isDragging(),
    }),
  });
};

export const useWorkoutDrop = (toDay: Day) => {
  const { dispatch } = useData();

  return useDrop<WorkoutDragItem, void, { isWorkoutDropOver: boolean }>({
    accept: "workout",
    drop: (item) => {
      dispatch({
        type: "MOVE_WORKOUT",
        payload: {
          workoutId: item.id,
          fromDay: item.day,
          toDay: toDay,
        },
      });
    },
    collect: (monitor) => ({
      isWorkoutDropOver: monitor.isOver(),
    }),
  });
};

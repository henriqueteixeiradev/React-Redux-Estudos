import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sliceTasksProps {
  name: string;
  done: boolean;
}

const INITIAL_STATE: sliceTasksProps[] = [];

const sliceTasks = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTasks(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, done: false }];
    },
    toDone(state, { payload }: PayloadAction<string>) {
      return state.map((task) =>
        task.name === payload ? { ...task, done: !task.done } : task
      );
    },
    removeTask(state, { payload }: PayloadAction<string>) {
      return state.filter((task) => task.name !== payload);
    },
  },
});

export default sliceTasks.reducer;
export const { addTasks, toDone, removeTask } = sliceTasks.actions;
export const useTasks = (state: any) => {
  return state.tasks as sliceTasksProps[];
};

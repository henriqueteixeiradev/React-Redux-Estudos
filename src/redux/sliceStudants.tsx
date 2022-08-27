import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sliceTasksProps {
  id: number;
  name: string;
  phone: string;
  state: string;
  city: string;
  birthday: string;
  timestamp: Date;
}

const INITIAL_STATE: sliceTasksProps[] = [];

const sliceStudants = createSlice({
  name: "students",
  initialState: INITIAL_STATE,
  reducers: {
    addStudent(state, { payload }: PayloadAction<sliceTasksProps>) {
      return [
        ...state,
        {
          id: payload.id,
          name: payload.name,
          phone: payload.name,
          state: payload.state,
          city: payload.city,
          birthday: payload.birthday,
          timestamp: new Date(),
        },
      ];
    },
    removeStudent(state, { payload }: PayloadAction<string>) {
      return state.filter((student) => student.name !== payload);
    },
  },
});

export default sliceStudants.reducer;
export const { addStudent, removeStudent } = sliceStudants.actions;
export const useStudants = (state: any) => {
  return state.tasks as sliceTasksProps[];
};

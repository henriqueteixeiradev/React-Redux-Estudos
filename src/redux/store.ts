import { configureStore } from "@reduxjs/toolkit";
import sliceTasks from "./sliceTasks";

const store = configureStore({
  reducer: {
    tasks: sliceTasks,
  },
});

export default store;

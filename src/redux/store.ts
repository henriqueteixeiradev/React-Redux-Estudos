import { configureStore } from "@reduxjs/toolkit";
import sliceTasks from "./sliceTasks";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const Reducers = combineReducers({
  tasks: sliceTasks,
});

const persistConfig = { key: "tasks", storage };

const persisted = persistReducer(persistConfig, Reducers);

const store = configureStore({
  reducer: persisted,
});

export const persistor = persistStore(store);
export { store };

// export const useAppSelector = () => useSelector((state: RootState) => state);
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
// export type RootState = ReturnType<typeof store.getState>;

// const {tasks} = useAppDispatch()

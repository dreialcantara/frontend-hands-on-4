import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./module/user";

const store = configureStore({
  reducer: {
    userReduce,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;

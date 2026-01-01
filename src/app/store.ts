import { configureStore } from "@reduxjs/toolkit";
import FileTreeSlice from "./features/FileTreeSlice";
export const store = configureStore({
  reducer: {
    FileTree: FileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

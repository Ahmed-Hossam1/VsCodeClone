import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../Interface";

interface IFileTree {
  TabFiles: IFile[];
  ClickedFile: {
    fileName: string;
    fileContent: string;
  };
}
const initialState: IFileTree = {
  TabFiles: [],
  ClickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const FileTreeSlice = createSlice({
  name: "FileTree",
  initialState,
  reducers: {
    setTabFile: (state, action: PayloadAction<IFile[]>) => {
      state.TabFiles = action.payload;
    },
  },
});

export const { setTabFile } = FileTreeSlice.actions;
export default FileTreeSlice.reducer;

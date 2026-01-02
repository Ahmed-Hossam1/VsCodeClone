import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../Interface";

interface IClickedFile {
    activeTab: string | null;
  fileName: string;
  fileContent: string | undefined;
}
interface IFileTree {
  TabFiles: IFile[];
  ClickedFile: IClickedFile;
}
const initialState: IFileTree = {
    TabFiles: [],
    ClickedFile: {
      activeTab: null,
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

    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.ClickedFile = action.payload;
    },
  
  },
});

export const { setTabFile, setClickedFile  } = FileTreeSlice.actions;
export default FileTreeSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../Interface";

interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}
interface IFileTree {
  activeTab: string | null;
  TabFiles: IFile[];
  ClickedFile: IClickedFile;
}
const initialState: IFileTree = {
  activeTab: null,
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

    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.ClickedFile.fileName = action.payload.fileName;
      state.ClickedFile.fileContent = action.payload.fileContent;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setTabFile, setClickedFile , setActiveTab } = FileTreeSlice.actions;
export default FileTreeSlice.reducer;

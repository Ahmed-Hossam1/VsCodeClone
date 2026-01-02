import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setTabFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";
import type { IFile } from "../Interface";
import FileExtension from "./FileExtension";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}
const OpenedFileTab = ({ file }: IProps) => {
  const { id, name, content } = file;
  const { TabFiles, ClickedFile } = useSelector(
    (state: RootState) => state.FileTree
  );
  const dispatch = useDispatch();
  const handleTabClicked = () => {
    dispatch(
      setClickedFile({ fileName: name, fileContent: content, activeTab: id })
    );
  };

  const handleRemove = (id: string) => {
    const filtered = TabFiles.filter((file) => file.id !== id);
    const lastTab = filtered[filtered.length - 1];

    if (!lastTab) {
      dispatch(setTabFile([]));
      dispatch(
        setClickedFile({ fileName: "", fileContent: "", activeTab: null })
      );
      return;
    }
    dispatch(setTabFile(filtered));
    dispatch(
      setClickedFile({
        fileName: lastTab.name,
        fileContent: lastTab.content,
        activeTab: lastTab.id,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        file.id === ClickedFile.activeTab
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={handleTabClicked}
    >
      <span>
        <FileExtension name={name} />
      </span>
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          handleRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileTab;

import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setTabFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";
import type { IFile } from "../Interface";
import RenderFileIcon from "./RenderFileIcon";
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
      className={`flex items-center  px-3 py-2 border-t-2 cursor-pointer select-none hover:text-white overflow-x-hidden 
        ${
          file.id === ClickedFile.activeTab
            ? "border-[#cf6ccf] bg-[#1c1c1c] text-white"
            : "border-transparent hover:bg-[#222222] "
        }`}
      onClick={handleTabClicked}
    >
      <div className="shrink-0 mr-2">
        <RenderFileIcon name={name} />
      </div>

      <span className="flex-1 truncate ">{name}</span>

      <button
        className="ml-2 p-1 rounded hover:bg-[#64646473] flex items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          handleRemove(file.id);
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default OpenedFileTab;

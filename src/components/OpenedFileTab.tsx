import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../Interface";
import FileExtension from "./FileExtension";
import CloseIcon from "./SVG/CloseIcon";
import { setActiveTab, setClickedFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}
const OpenedFileTab = ({ file }: IProps) => {
  const { name, content } = file;
  const { activeTab } = useSelector((state: RootState) => state.FileTree);
  const dispatch = useDispatch();
  const handleTabClicked = () => {
    dispatch(setClickedFile({ fileName: name, fileContent: content }));
    dispatch(setActiveTab(file.id));
  };
  return (
    <div
      className="flex items-center p-2 text-white bg-black"
      style={{ border: activeTab === file.id ? "1px solid red" : "" }}
      onClick={handleTabClicked}
    >
      <span>
        <FileExtension name={name} />
      </span>
      <div>{name}</div>
      <CloseIcon />
    </div>
  );
};

export default OpenedFileTab;

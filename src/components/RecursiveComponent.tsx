import { useState } from "react";
import type { IFile } from "../Interface";
import FileExtension from "./FileExtension";
import ArrowDown from "./SVG/ArrowDown";
import ArrowRight from "./SVG/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setTabFile } from "../app/features/FileTreeSlice";
interface IProps {
  FileTree: IFile;
}
const RecursiveComponent = ({ FileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const FileTabs = useSelector((state: RootState) => state.FileTree.TabFiles);
  const dispatch = useDispatch();

  const handleAddTab = () => {
    if (FileTabs.find((file) => file.id === FileTree.id)) return;
    dispatch(setTabFile([...FileTabs, FileTree]));
  };
  return (
    <div className="ml-4">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {FileTree.isFolder ? (
          <div className="flex items-center space-x-1 cursor-pointer">
            {isOpen ? <ArrowDown /> : <ArrowRight />}
            <FileExtension
              name={FileTree.name}
              isOpen={isOpen}
              isFolder={FileTree.isFolder}
            />
            <div>{FileTree.name}</div>
          </div>
        ) : (
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={handleAddTab}
          >
            <FileExtension
              name={FileTree.name}
              isOpen={isOpen}
              isFolder={FileTree.isFolder}
            />
            <div>{FileTree.name}</div>
          </div>
        )}
      </div>
      {isOpen &&
        FileTree.children &&
        FileTree.children.map((File, idx) => (
          <RecursiveComponent key={idx} FileTree={File} />
        ))}
    </div>
  );
};

export default RecursiveComponent;

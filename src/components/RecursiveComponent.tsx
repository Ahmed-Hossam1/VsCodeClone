import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabFile } from "../app/features/FileTreeSlice";
import type { RootState } from "../app/store";
import type { IFile } from "../Interface";
import FileExtension from "./RenderFileIcon";
import ArrowDown from "./SVG/ArrowDown";
import ArrowRight from "./SVG/ArrowRight";
interface IProps {
  FileTree: IFile;
}
const RecursiveComponent = ({ FileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isFolder, name, children } = FileTree;

  const FileTabs = useSelector((state: RootState) => state.FileTree.TabFiles);
  const dispatch = useDispatch();

  const toggle = () => setIsOpen((prev) => !prev);

  const handleAddTab = () => {
    if (FileTabs.find((file) => file.id === FileTree.id)) return;
    dispatch(setTabFile([...FileTabs, FileTree]));
  };
  return (
    <div className="mb-1 ml-1 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span className="mr-2">
              {isOpen ? <ArrowDown /> : <ArrowRight />}
            </span>

            <FileExtension name={name} isFolder isOpen={isOpen} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-6" onClick={handleAddTab}>
            <FileExtension name={name} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent FileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;

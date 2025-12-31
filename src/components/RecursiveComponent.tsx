import { useState } from "react";
import type { IFile } from "../Interface";
import FileExtension from "./FileExtension";
import ArrowDown from "./SVG/ArrowDown";
import ArrowRight from "./SVG/ArrowRight";

interface IProps {
  FileTree: IFile;
}
const RecursiveComponent = ({ FileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

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
          </div>
        ) : (
            <FileExtension
              name={FileTree.name}
              isOpen={isOpen}
              isFolder={FileTree.isFolder}
            />
        )}

        <div>{FileTree.name}</div>
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

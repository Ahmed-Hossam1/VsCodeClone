import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileTab from "./OpenedFileTab";
import SyntaxHighlighter from "./SyntaxHighlighter";

const OpenedFileBar = () => {
  const { TabFiles, ClickedFile } = useSelector(
    (state: RootState) => state.FileTree
  );
  return (
    <div>
      <ul className="flex items-center space-x-1">
        {TabFiles.map((file) => (
          <OpenedFileTab file={file} key={file.id} />
        ))}
      </ul>

      <SyntaxHighlighter content={ClickedFile.fileContent} />
    </div>
  );
};

export default OpenedFileBar;

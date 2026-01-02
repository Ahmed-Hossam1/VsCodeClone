import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileTab from "./OpenedFileTab";
import SyntaxHighlighter from "./SyntaxHighlighter";

const OpenedFileBar = () => {
  const { TabFiles, ClickedFile } = useSelector(
    (state: RootState) => state.FileTree
  );
  return (
    <div className="w-full">
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {TabFiles.map((file) => (
          <OpenedFileTab file={file} key={file.id} />
        ))}
      </div>

      <SyntaxHighlighter content={ClickedFile.fileContent} />
    </div>
  );
};

export default OpenedFileBar;

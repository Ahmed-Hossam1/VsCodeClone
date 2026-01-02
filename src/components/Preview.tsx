import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Highlighter from "./Highlighter";
import OpenedFileBar from "./OpenedFileBar";

const Preview = () => {
  const { ClickedFile } = useSelector((state: RootState) => state.FileTree);
  return (
    <>
      <OpenedFileBar />
      <Highlighter content={ClickedFile.fileContent} />
    </>
  );
};

export default Preview;

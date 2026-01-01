import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileTab from "./OpenedFileTab";

const OpenedFileBar = () => {
  const { TabFiles } = useSelector((state: RootState) => state.FileTree);
  return (
    <div className="w-full">
      {TabFiles.map((file) => (
        <OpenedFileTab file={file} key={file.id}/>
      ))}
    </div>
  );
};

export default OpenedFileBar;

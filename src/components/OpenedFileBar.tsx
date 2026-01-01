import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileTab from "./OpenedFileTab";

const OpenedFileBar = () => {
  const { TabFiles } = useSelector((state: RootState) => state.FileTree);
  return (
    <div className="w-full">
      <ul className="flex items-center space-x-1">
        {TabFiles.map((file) => (
          <OpenedFileTab file={file} key={file.id} />
        ))}
      </ul>
    </div>
  );
};

export default OpenedFileBar;

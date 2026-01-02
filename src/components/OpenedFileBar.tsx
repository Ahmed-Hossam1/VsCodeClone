import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFileTab from "./OpenedFileTab";

const OpenedFileBar = () => {
  const { TabFiles } = useSelector((state: RootState) => state.FileTree);

  return (
    <div className=" flex items-center border-r border-[#ffffff1f] overflow-x-auto whitespace-nowrap">
      {TabFiles.length > 0 &&
        TabFiles.map((file) => <OpenedFileTab file={file} key={file.id} />)}
    </div>
  );
};

export default OpenedFileBar;

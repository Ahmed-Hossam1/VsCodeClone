import { useDispatch } from "react-redux";
import type { IFile } from "../Interface";
import FileExtension from "./FileExtension";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile } from "../app/features/FileTreeSlice";

interface IProps {
  file: IFile;
}
const OpenedFileTab = ({ file }: IProps) => {
  const { name , content } = file;
  const dispatch  = useDispatch() 
const handleTabClicked = ()=> {
  dispatch(setClickedFile({fileName: name , fileContent: content}))
}
  return (
    <div className="flex items-center border-2 border-red-500 p-2 text-white bg-black" onClick={handleTabClicked}>
      <span>
        <FileExtension name={name} />
      </span>
      <div>{name}</div>
      <CloseIcon />
    </div>
  );
};

export default OpenedFileTab;

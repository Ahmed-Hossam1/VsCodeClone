import { ExtIconPath } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/FileIcon";

interface IProps {
  name: string;
  isOpen?: boolean;
  isFolder?: boolean;
}
const RenderFileIcon = ({ name, isOpen, isFolder }: IProps) => {
  const Extension = name.split(".").pop();

  if (
    Extension &&
    Object.prototype.hasOwnProperty.call(ExtIconPath, Extension)
  ) {
    const path = isFolder
      ? isOpen
        ? `${ExtIconPath[Extension]}-open.svg`
        : `${ExtIconPath[Extension]}.svg`
      : `${ExtIconPath[Extension]}.svg`;
    return <IconImg src={path} />;
  }

  if (isFolder && isOpen)
    return <IconImg src="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg src="/public/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;

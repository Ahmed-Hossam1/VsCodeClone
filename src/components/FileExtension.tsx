import IconImg from "./IconImg";
import FileIcon from "./SVG/FileIcon";

interface IProps {
  name: string;
  isOpen?: boolean;
  isFolder?: boolean;
}
const FileExtension = ({ name, isOpen, isFolder }: IProps) => {
  const Extension = name.split(".").pop();

  const ExtIconPath: Record<string, string> = {
    //Files
    tsx: "/public/icons/react_ts",
    html: "/public/icons/html",
    js: "/public/icons/javascript",

    //Folder
    node_modules: "/public/icons/folder-node",
    components: "/public/icons/folder-components",
    src: "/public/icons/folder-src",
    public: "/public/icons/folder-public",
  };

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

export default FileExtension;

import IconImg from "./IconImg";
import FileIcon from "./SVG/FileIcon";

interface IProps {
  name: string;
  isOpen?: boolean;
  isFolder?: boolean;
}
const FileExtension = ({ name, isOpen, isFolder }: IProps) => {
  const Extension = name.split(".").pop();

  //Files

  if (Extension === "tsx") return <IconImg src="/public/icons/react_ts.svg" />;
  if (Extension === "html") return <IconImg src="/public/icons/html.svg" />;
  if (Extension == "js") return <IconImg src="/public/icons/javascript.svg" />;

  //Folders
  if (Extension == "node_modules" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-node.svg" />
    );
  if (Extension == "components" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-components.svg" />
    );

  if (Extension == "src" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-src.svg" />
    );

  if (Extension == "public" && isFolder)
    return isOpen ? (
      <IconImg src="/public/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/public/icons/folder-public.svg" />
    );

  if (isFolder && isOpen)
    return <IconImg src="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImg src="/public/icons/folder-default.svg" />;
  return <FileIcon />;
};

export default FileExtension;

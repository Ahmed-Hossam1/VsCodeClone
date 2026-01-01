import type { IFile } from "../Interface"
import FileExtension from "./FileExtension"

interface IProps {
  file : IFile
}
const OpenedFileTab = ({file} : IProps) => {
  const {name} = file
  return (
  <div className="flex items-center border-2 border-red-500 p-2">
    <span>
    <FileExtension name={name} />
    </span>
    <div>{name}</div>
  </div>
  )
}

export default OpenedFileTab
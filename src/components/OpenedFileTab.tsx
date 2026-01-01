import type { IFile } from "../Interface"

interface IProps {
  file : IFile
}
const OpenedFileTab = ({file} : IProps) => {
  const {name} = file
  return (
   <span>{name}</span>
  )
}

export default OpenedFileTab
export interface IFile {
  name: string;
  isFolder: boolean;
  content?: string;
  children?: IFile[];
}

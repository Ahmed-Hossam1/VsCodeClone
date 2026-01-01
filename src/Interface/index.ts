export interface IFile {
  id?: string | number;
  name: string;
  isFolder: boolean;
  content?: string;
  children?: IFile[];
}

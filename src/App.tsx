import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data";
import type { RootState } from "./app/store";
import IconImg from "./components/IconImg";

function App() {
  const { TabFiles } = useSelector((state: RootState) => state.FileTree);
  return (
    <div>
      <ResizablePanel
        ShowLeftSide={
          <div>
            <RecursiveComponent FileTree={FileTree} />
          </div>
        }
        ShowRightSide={
          TabFiles.length > 0 ? (
            <Preview />
          ) : (
            <IconImg
              src="/public/icons/vscode.svg"
              ClassName="w-full h-screen flex justify-center items-center"
            />
          )
        }
      />
    </div>
  );
}

export default App;

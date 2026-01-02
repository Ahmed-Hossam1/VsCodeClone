import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data";

function App() {
  return (
    <div>
      <ResizablePanel
        ShowLeftSide={
          <div>
            <RecursiveComponent FileTree={FileTree} />
          </div>
        }
        ShowRightSide={
          <div className="">
            <Preview />
          </div>
        }
      />
    </div>
  );
}

export default App;

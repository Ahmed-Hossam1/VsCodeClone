import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data";

function App() {
  return (
    <div className="flex">
      <div className="border-r-2 w-56">
        <RecursiveComponent FileTree={FileTree} />
      </div>
      <div>
        <OpenedFileBar />
      </div>
    </div>
  );
}

export default App;

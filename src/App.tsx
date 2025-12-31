import RecursiveComponent from "./components/RecursiveComponent";
import { FileTree } from "./data";

function App() {
  return (
    <div>
      <RecursiveComponent FileTree={FileTree} />
    </div>
  );
}

export default App;

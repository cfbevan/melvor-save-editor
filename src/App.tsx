import Editor from "./Editor";
import SaveLoad from "./SaveLoad";
import StateProvider from "./StateProvider";

const App = () => (
  <div className="App">
    <StateProvider>
      <SaveLoad />
      <Editor />
    </StateProvider>
  </div>
);

export default App;

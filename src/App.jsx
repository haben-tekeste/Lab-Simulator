import "react-tabs/style/react-tabs.css";
import Setup from "./components/Setup";
import Procedure from "./components/Procedure";
import Data from "./components/Data";

import "./App.css";

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Data />
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <Procedure />
        <Setup />
      </div>
    </div>
  );
}

export default App;

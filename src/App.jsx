import "react-tabs/style/react-tabs.css";
import Setup from "./components/Setup";
import Procedure from "./components/Procedure";
import Data from "./components/Data";

import "./App.css";

function App() {
  return (
    <div>
      {
        <div style={{ display: "flex", gap: "1rem" }}>
          <Data />
          <Procedure />
        </div>
      }
      <Setup />
    </div>
  );
}

export default App;

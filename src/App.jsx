import "react-tabs/style/react-tabs.css";
import Setup from "./components/Setup";
import Procedure from "./components/Procedure";
import Data from "./components/Data";
import Result from "./components/Result";
import PreQuiz from "./components/PreQuiz";
import PostQuiz from "./components/PostQuiz";
import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Data />
          <Result />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <PreQuiz />
          <PostQuiz />
        </div>
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

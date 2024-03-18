import "react-tabs/style/react-tabs.css";
import Setup from "./components/Setup";
import Procedure from "./components/Procedure";
import Data from "./components/Data";
import Result from "./components/Result";
import PreQuiz from "./components/PreQuiz";
import PostQuiz from "./components/PostQuiz";
import "./App.css";
import { exportToExcel } from "../utils";
import { useState } from "react";
import logo from "./assets/auklogo.jpeg";

function App() {
  const [finalCO2Rate, setFinalCO2Rate] = useState(0);
  const [waterFlowmeter, setWaterFlowmeter] = useState(0);
  const [airFlowmeter, setAirFlowmeter] = useState(0);
  const [co2Flowmeter, setCo2Flowmeter] = useState(0);
  const handleResults = () => {
    if (!finalCO2Rate) alert("Please do the calculation first");
    const jsonData = [
      {
        waterFlowmeter: waterFlowmeter,
        airFlowmeter: airFlowmeter,
        co2Flowmeter: co2Flowmeter,
        waterTemperature: 80,
        co2Temperature: 25,
        co2Concentration: 19,
        finalCO2Rate: finalCO2Rate,
      },
    ];
    exportToExcel(jsonData, "results");
  };
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Data />
          <Result onPress={handleResults} />
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <PreQuiz />
          <PostQuiz />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <Procedure />
        <Setup
          finalCO2Rate={finalCO2Rate}
          setFinalCO2Rate={setFinalCO2Rate}
          waterFlowmeter={waterFlowmeter}
          setWaterFlowmeter={setWaterFlowmeter}
          airFlowmeter={airFlowmeter}
          setAirFlowmeter={setAirFlowmeter}
          co2Flowmeter={co2Flowmeter}
          setCo2Flowmeter={setCo2Flowmeter}
        />
      </div>
      <a href="https://aurak.ac.ae/undergraduate-degrees/engineering/bachelor-of-science-in-chemical-engineering" rel="noreferrer" target="_blank">
        <img src={logo} width={50} height={50} alt="" />
      </a>
    </div>
  );
}

export default App;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Setup from "./components/Setup";
import Procedure from "./components/Procedure";
import Data from "./components/Data";
import "./App.css";

function App() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Procedure</Tab>
          <Tab>Data</Tab>
          <Tab>Experiment</Tab>
        </TabList>
        <TabPanel>
          <Procedure />
        </TabPanel>
        <TabPanel>
          <Data />
        </TabPanel>
        <TabPanel>
          <Setup />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;

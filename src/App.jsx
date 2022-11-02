import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MapExample from "./MapExample";
import MapExample2 from "./MapExample2";
import StackExample from "./StackExample";
import QueueExample from "./QueueExample";
import TreeExample from "./TreeExample";
import TreeExample2 from "./TreeExample2";

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Map</Tab>
        <Tab>Map 2</Tab>
        <Tab>Stack</Tab>
        <Tab>Queue</Tab>
        <Tab>Tree</Tab>
        <Tab>Tree 2</Tab>
      </TabList>

      <TabPanel>
        <MapExample />
      </TabPanel>
      <TabPanel>
        <MapExample2 />
      </TabPanel>
      <TabPanel>
        <StackExample />
      </TabPanel>
      <TabPanel>
        <QueueExample />
      </TabPanel>
      <TabPanel>
        <TreeExample />
      </TabPanel>
      <TabPanel>
        <TreeExample2 />
      </TabPanel>
    </Tabs>
  );
}
export default App;

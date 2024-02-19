import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [val, setVal] = useState<string>("");

  return (
    <>
      <Box label="Search" value={val} setter={setVal} />
    </>
  );
}

export default App;

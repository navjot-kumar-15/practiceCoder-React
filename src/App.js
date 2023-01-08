import "./App.css";
import { useState } from "react";
import Nav from "./Component/Nav/Nav";
import Text from "./Component/TextForm/Text";
function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Disable ");
      document.body.style.backgroundColor = "#26212c";
    } else {
      setMode("light");
      setText("Enable ");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Nav
        title="practiceCoder"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />

      <Text heading="Enter the text here to analyze below" mode={mode} />
    </>
  );
}

export default App;

import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark Mode");
  const [myColor, setMyColor] = useState("black");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light Mode");
      setMyColor("white");
      document.body.style.background = "#343a40";
    } else {
      setMode("light");
      setModeText("Light Mode");
      setMyColor("black");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar
            title="TextUtils"
            mode={mode}
            toggleMode={toggleMode}
            modeText={modeText}
            style={myColor}
          />
          <div className="container my-3"></div>
          <Routes>
            <Route path="/about" element={<About color={myColor} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Analyze the Text:"
                  btnUpText="Convert to UpperCase"
                  btnDnText="Convert to LowerCase"
                  btnClrText="Clear the text"
                  color={myColor}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

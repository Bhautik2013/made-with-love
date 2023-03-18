// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  // const [textMode, settextMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // settextMode("light");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // settextMode("dark");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm header="Enter the text to Analyze" mode={mode}/>
      </div>
      {/* <About className=""/> */}
    </>
  );
}

export default App;

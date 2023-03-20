// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [colorMode, setcolorMode] = useState(null);

  const changeColorMode = (bgClass,bgMain,textClass)=>{
    
    return () => {
      console.log(bgClass,bgMain,textClass);
      setcolorMode({
        bgClass : bgClass,
        bgMain : bgMain,
        textClass : textClass
      });
      document.body.style.backgroundColor = bgMain;
      
      // setMode(bgClass)
    }
    
  }

  const showAlert = (msgBold,msgAlert,type)=>{
    setAlert({
      msgBold : msgBold,
      msgAlert : msgAlert,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  // const [textMode, settextMode] = useState('dark');

  const toggleMode = ()=>{
    setcolorMode(null);
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // showAlert("Enabled","Dark Mode Enabled","success");
      // settextMode("light");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light Enabled","Light Mode Enabled","info");
      // settextMode("dark");
    }
  }

  

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} changeColorMode={changeColorMode} colorMode={colorMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm header="Enter the text to Analyze" mode={mode} showAlert={showAlert}  changeColorMode={changeColorMode} colorMode={colorMode}/>
      </div>    
      
      {/* <About className=""/> */}
    </>
  );
}

export default App;

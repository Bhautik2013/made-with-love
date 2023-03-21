// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter,  
  Routes,
  Route,
  Outlet
} from "react-router-dom";

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
      document.title = "TextUtil - Colorful Theme"
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
      document.title = "TextUtil - Dark Theme"
      // showAlert("Enabled","Dark Mode Enabled","success");
      // settextMode("light");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtil"
      // showAlert("Light Enabled","Light Mode Enabled","info");
      // settextMode("dark");
    }
  }

  

  return (
    <>
    
      
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} changeColorMode={changeColorMode} colorMode={colorMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" 
        element={
          <div className="container my-3">
            <TextForm header="Enter the text to Analyze" mode={mode} showAlert={showAlert}  changeColorMode={changeColorMode} colorMode={colorMode}/>
          </div>
        } />
        <Route ecact path="about" element={<About mode={mode} changeColorMode={changeColorMode} colorMode={colorMode}/>}/>
        <Route exact path="*" element={<h3>Oops! Invalid Page Request.</h3>}/>
      
      
      {/* <About className=""/> */}
      </Routes>
      <Outlet/>
    </BrowserRouter>
    </>
  );
}

export default App;

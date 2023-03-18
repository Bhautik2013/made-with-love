// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm header="Enter the text to Analyze"/>
      </div>
      {/* <About className=""/> */}
    </>
  );
}

export default App;

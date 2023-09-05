import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Form from './views/Form/Form.jsx';




function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/form" element={<Form  />} />
      </Routes>
    </div>
  );
}

export default App;

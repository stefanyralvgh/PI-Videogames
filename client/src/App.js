import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Form from './views/Form/Form.jsx';
import Detail from "./views/Detail/Detail";




function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/form" element={<Form  />} />
        <Route path="/detail/:id" element={<Detail  />} />
      </Routes>
    </div>
  );
}

export default App;

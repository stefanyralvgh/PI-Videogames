import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";

function App() {
  const [videogames, setVideogames] = useState([]);

  async function onSearch(query) {
    try {
      const response = await fetch(
        `http://localhost:3001/videogames/name?name=${query}`
      );

      console.log(response);
      if (response.ok) {
        const data = await response.json();

        if (data.name) {
          videogames.find((element) => element.name === data.name) === undefined
            ? setVideogames((videogames) => [...videogames, data])
            : alert("Duplicated videogame, please try another one");
        }
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There are no videogames with that name.");
    }
  }

  return (
    <div className="App">
      {/* {pathname !== "/" && <NavBar onSearch={onSearch} />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home onSearch={onSearch} />} />
      </Routes>
    </div>
  );
}

export default App;

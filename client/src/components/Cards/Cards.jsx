import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import Card from "../Card/Card";
import { CardsContainer } from "./CardsStyles";

export default function Cards() {
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
  const { videogames, page, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Filtrar los juegos según el término de búsqueda
  const filteredGames = searchTerm
    ? videogames.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : videogames;

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedGames = filteredGames.slice(startIndex, endIndex);

  const onSearch = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      {/* Campo de entrada para la búsqueda */}
      <input
        type="text"
        placeholder="Buscar juegos"
        onChange={onSearch}
        value={searchTerm}
      />
      <CardsContainer>
        {displayedGames.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            image={game.image}
            name={game.name}
            genres={game.genres}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

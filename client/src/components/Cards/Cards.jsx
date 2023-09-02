import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import Card from "../Card/Card";
import { CardsContainer } from "./CardsStyles";

export default function Cards() {
  const { videogames, page, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedGames = videogames.slice(startIndex, endIndex);


  return (
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
  );
}

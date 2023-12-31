import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import {
  CardsContainer,
  LinkToDetail,
  SearchContainer,
  SearchInput,
  FormLink,
  NotFound,
} from "./CardsStyles";
import Card from "../Card/Card";

export default function Cards({
  selectedGenre,
  selectedAlphabeticalOrder,
  selectedRatingOrder,
  selectedSource,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const { videogames, page, perPage } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch, selectedSource]);



  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch, selectedGenre]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredGames = searchTerm
    ? videogames.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : videogames;

  // const sortAlphabetically = (games) => {
  //   if (selectedAlphabeticalOrder === "asc") {
  //     return [...games].sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (selectedAlphabeticalOrder === "desc") {
  //     return [...games].sort((a, b) => b.name.localeCompare(a.name));
  //   } else {
  //     return games;
  //   }
  // };

  const sortAlphabetically = (games, selectedAlphabeticalOrder) => {
    if (selectedAlphabeticalOrder === "asc") {
      return [...games].sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedAlphabeticalOrder === "desc") {
      return [...games].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return games;
    }
  };

  const sortByRating = (games) => {
    if (selectedRatingOrder === "ratingAsc") {
      return [...games].sort((a, b) => a.rating - b.rating);
    } else if (selectedRatingOrder === "ratingDesc") {
      return [...games].sort((a, b) => b.rating - a.rating);
    } else {
      return games;
    }
  };

  const getBySource = (videogames, selectedSource) => {
    if (selectedSource === "API") {
      const filteredSourceGames = videogames.filter((game) => game.id <= 100);
      return filteredSourceGames;
    } else if (selectedSource === "DB") {
      const filteredSourceGames = videogames.filter((game) => game.id > 100);
      return filteredSourceGames;
    } else {
      return videogames;
    }
  };

  // const getBySource = (videogames, selectedSource) => {
  //   if (selectedSource === "DB") {
  //     return videogames.filter((game) => game.source === "DB");
  //   } else if (selectedSource === "API") {
  //     return videogames.filter((game) => game.source !== "DB");
  //   } else {
  //     return videogames;
  //   }
  // };

  const getByGenre = (videogames, genre) => {
    if (genre === "All") {
      return videogames;
    } else {
      const filteredGenreGames = videogames.filter((game) =>
        game.Genres.some((gameGenre) => gameGenre.name === selectedGenre)
      );
      return filteredGenreGames;
    }
  };

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  let sortedGames = getByGenre(
    getBySource(
      sortByRating(
        sortAlphabetically(filteredGames, selectedAlphabeticalOrder)
      ),
      selectedSource
    ),
    selectedGenre
  );

  let displayedGames = sortedGames.slice(startIndex, endIndex);
  const noGamesFound = displayedGames.length === 0;

  const onSearch = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <SearchContainer>
        <FormLink to="/form">
          <img
            width="30"
            height="30"
            src="./Images/ADD.png"
            alt="ADD NEW GAME"
            title="ADD A NEW GAME"
          />
        </FormLink>
        <SearchInput
          type="text"
          placeholder="Search game"
          onChange={onSearch}
          value={searchTerm}
        />
      </SearchContainer>
      {noGamesFound ? (
        <div>
          <img src="./Images/NO-RESULTS.PNG" alt="NO RESULTS FOUND" />
          <NotFound>NO RESULTS FOUND</NotFound>
        </div>
      ) : (
        <CardsContainer>
          {displayedGames.map((game) => (
            <LinkToDetail to={`/detail/${game.id}`} key={game.id}>
              <Card
                key={game.id}
                id={game.id}
                image={game.image}
                name={game.name}
                genres={game.Genres}
                rating={game.rating}
              />
            </LinkToDetail>
          ))}
        </CardsContainer>
      )}
    </div>
  );
}

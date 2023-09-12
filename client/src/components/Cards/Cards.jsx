import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import { CardsContainer, LinkToDetail, SearchContainer, SearchInput, FormLink } from "./CardsStyles";
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

  const sortAlphabetically = (games) => {
    if (selectedAlphabeticalOrder === "asc") {
      return games.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedAlphabeticalOrder === "desc") {
      return games.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return games;
    }
  };


  const sortByRating = (games) => {
    if (selectedRatingOrder === "ratingAsc") {
      return games.sort((a, b) => a.rating - b.rating);
    } else if (selectedRatingOrder === "ratingDesc") {
      return games.sort((a, b) => b.rating - a.rating);
    } else {
      return games;
    }
  };

  const getBySource = (videogames, selectedSource) => {
    if (selectedSource === "API") {
      const filteredSourceGames = videogames.filter((game) => game.id <= 100);
      return filteredSourceGames;

    } 
    else if(selectedSource === "DB"){
      const filteredSourceGames = videogames.filter((game) => game.id > 100);
      return filteredSourceGames;

    }
    else{
       return videogames;
    }
  }
  console.log(selectedGenre)
  const getByGenre = (videogames, genre) => {
    if (genre === "All") {
      return videogames;
    } else {
      const filteredGenreGames = videogames.filter((game) =>
        game.Genres.some((gameGenre) => gameGenre.name === selectedGenre)
      );
      return filteredGenreGames;
    }
  }


  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;


  let sortedGames = getByGenre(getBySource(sortByRating(sortAlphabetically(filteredGames)), selectedSource), selectedGenre);

  let displayedGames = sortedGames.slice(startIndex, endIndex);

  const onSearch = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <SearchContainer>
      <FormLink to="/form">CREATE NEW GAME</FormLink>
        <SearchInput
          type="text"
          placeholder="Search game"
          onChange={onSearch}
          value={searchTerm}
        />
      </SearchContainer>
      <CardsContainer>
        {displayedGames.map((game) => (
          <LinkToDetail to={`/detail/${game.id}`} key={game.id}>
            <Card
              key={game.id}
              id={game.id}
              image={game.image}
              name={game.name}
              genres={game.Genres}
            />
          </LinkToDetail>
        ))}
      </CardsContainer>
    </div>
  );
}
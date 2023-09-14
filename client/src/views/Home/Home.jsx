import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions/actions";
import { getVideogames } from "../../redux/actions/actions";
import {
  NavigationButton,
  LoadingMessage,
  Container,
  SelectLabel,
  Select,
  HomeFilters,
  FilterGroup,
} from "./HomeStyles.js";
import axios from "axios";

export default function Home(props) {
  const { page, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedAlphabeticalOrder, setSelectedAlphabeticalOrder] =
    useState("default");
  const [selectedSource, setSelectedSource] = useState("All");
  const [selectedRatingOrder, setSelectedRatingOrder] = useState("default");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get("http://localhost:3001/genres");
        setGenres(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGenres();
  }, []);



  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const totalPages = Math.ceil(videogames.length / perPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );


  

  return (
    <Container>
      <HomeFilters>
        <FilterGroup>
          <SelectLabel>Genres:</SelectLabel>
          <Select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="All">All genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </Select>
        </FilterGroup>
        <FilterGroup>
          <SelectLabel>Origins:</SelectLabel>
          <Select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            <option value="All">All origins</option>
            <option value="API">API</option>
            <option value="DB">Database</option>
          </Select>
        </FilterGroup>
        <FilterGroup>
          <SelectLabel>Alphabetical order:</SelectLabel>
          <Select
            value={selectedAlphabeticalOrder}
            onChange={(e) => setSelectedAlphabeticalOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </Select>
        </FilterGroup>
        <FilterGroup>
          <SelectLabel>Rating:</SelectLabel>
          <Select
            value={selectedRatingOrder}
            onChange={(e) => setSelectedRatingOrder(e.target.value)}
          >
            <option value="default">Default rating</option>
            <option value="ratingAsc">Ascending</option>
            <option value="ratingDesc">Descending</option>
          </Select>
        </FilterGroup>
      </HomeFilters>
      {videogames.length > 0 ? (
        <div>
          <Cards
            onSearch={props.onSearch}
            selectedGenre={selectedGenre}
            selectedAlphabeticalOrder={selectedAlphabeticalOrder}
            selectedRatingOrder={selectedRatingOrder}
            selectedSource={selectedSource}
          />
          <div>
            <NavigationButton
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              {"❮"}
            </NavigationButton>
            {pageNumbers.map((pageNumber) => (
              <NavigationButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageNumber === page }
             
              >
                {pageNumber}
              </NavigationButton>
            ))}
            <NavigationButton
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages || page >= totalPages}

            >
              {"❯"}
            </NavigationButton>
          </div>
        </div>
      ) : (
        <LoadingMessage>Loading games...</LoadingMessage>
      )}
    </Container>
  );
}

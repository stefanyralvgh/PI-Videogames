import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions/actions";
import { getVideogames } from "../../redux/actions/actions";
import {
  NavigationButton,
  LoadingMessage,
  FormLink,
  Container,
  SelectContainer,
  SelectLabel,
  Select,
} from "./HomeStyles.js";
import axios from "axios";

export default function Home(props) {
  const { page, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedAlphabeticalOrder, setSelectedAlphabeticalOrder] =
    useState("default");
  const [selectedSource, setSelectedSource] = useState("Todos");
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
      <FormLink to="/form">CREATE A NEW GAME</FormLink>
      <SelectContainer>
        <SelectLabel>Filter by genre:</SelectLabel>
        <Select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Todos">All genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel>Alphabetical order:</SelectLabel>
        <Select
          value={selectedAlphabeticalOrder}
          onChange={(e) => setSelectedAlphabeticalOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </Select>
      </SelectContainer>
      <SelectContainer>
        <SelectLabel>Order by rating:</SelectLabel>
        <Select
          value={selectedRatingOrder}
          onChange={(e) => setSelectedRatingOrder(e.target.value)}
        >
          <option value="default">Order by default rating</option>
          <option value="ratingAsc">Ascending</option>
          <option value="ratingDesc">Descending</option>
        </Select>
        <Select
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          <option value="Todos">All origins</option>
          <option value="API">API</option>
          <option value="DB">Database</option>
        </Select>
      </SelectContainer>
      {videogames.length > 0 ? (
        <div>
          <Cards
            onSearch={props.onSearch}
            selectedGenre={selectedGenre}
            selectedAlphabeticalOrder={selectedAlphabeticalOrder}
            selectedRatingOrder={selectedRatingOrder}
          />
          <div>
            {pageNumbers.map((pageNumber) => (
              <NavigationButton
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageNumber === page}
              >
                {pageNumber}
              </NavigationButton>
            ))}
          </div>
        </div>
      ) : (
        <LoadingMessage>Loading games...</LoadingMessage>
      )}
    </Container>
  );
}




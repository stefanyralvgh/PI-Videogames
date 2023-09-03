import React, { useEffect } from "react";
import Cards from "../../components/Cards/Cards.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions/actions";
import { getVideogames } from "../../redux/actions/actions";
import { NavigationButton, LoadingMessage } from "./HomeStyles.js";


export default function Home(props) {
  const { page, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      
      {videogames.length > 0 ? (
        <div>
          <Cards onSearch={props.onSearch} />
          <div>
            <NavigationButton
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </NavigationButton>
            <NavigationButton
              onClick={() => handlePageChange(page + 1)}
              disabled={videogames.length <= perPage * page}
            >
              Next
            </NavigationButton>
          </div>
        </div>
      ) : (
        <LoadingMessage>Loading games...</LoadingMessage>
      )}
    </div>
  );
}

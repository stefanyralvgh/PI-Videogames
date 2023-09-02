import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions/actions";
import Card from "../Card/Card";

export default function Cards() {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

  return (
    <div>
      {videogames.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          image={game.image}
          name={game.name}
          genres={game.genres}
        />
      ))}
    </div>
  );
}

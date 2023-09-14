import React from "react";
import {
  DetailContainer,
  DetailTitle,
  DetailImage,
  DetailButton,
  DetailText,
  ButtonItem,
} from "./DetailStyles";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [game, setGame] = useState({
    id: "",
    name: "",
    image: "",
    platforms: [],
    description: "",
    release_date: "",
    rating: "",
    genres: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setIsDataLoading(true);

    fetch(`http://localhost:3001/videogames/${detailId}`)
      .then((response) => response.json())
      .then((gameData) => {
        if (gameData.id) {
          const genresList = [];
          gameData.Genres.forEach((genre) => {
            genresList.push(genre.name);
          });
          setGame({
            id: gameData.id,
            name: gameData.name,
            image: gameData.image,
            platforms: gameData.platforms,
            description: gameData.description,
            release_date: gameData.release_date.substring(0, 10),
            rating: gameData.rating,
            genres: genresList,
          });
        } else {
          window.alert("There are no videogames with that ID");
        }
      })
      .catch((err) => {
        console.error("ERROR:", err);
        window.alert("Error occurred while getting data");
      })
      .finally(() => {
        setIsDataLoading(false);
        setIsLoading(false);
      });
  }, [detailId]);

  return (
    <div>
      {isLoading || isDataLoading ? (
        <Loading />
      ) : (
        <div>
          <DetailContainer>
            <DetailImage src={game.image} alt={`Image of ${game.name}`} />

            <div>
              <DetailTitle>ID </DetailTitle>
              <DetailText>{game.id}</DetailText>
              
            </div>
            <div>
              <DetailTitle>NAME</DetailTitle>
              <DetailText  style={{ fontSize: '20px', textTransform: 'uppercase' }}>{game.name}</DetailText>
            </div>
            <div>
              <DetailTitle>RATING</DetailTitle>
              <DetailText>{game.rating}</DetailText>
            </div>
            <div>
              <DetailTitle>RELEASE DATE</DetailTitle>
              <DetailText>{game.release_date}</DetailText>
            </div>
            <div>
              <DetailTitle>DESCRIPTION</DetailTitle>
              <DetailText style={{ fontSize: '18px' }}>{game.description}</DetailText>
            </div>
            <div>
              <DetailTitle>PLATFORMS</DetailTitle>{" "}
              <div>
                {game.platforms.map((platform, index) => (
                  <ButtonItem key={index}>{platform}</ButtonItem>
                ))}
              </div>
            </div>
            <div>
              <DetailTitle>GENRES</DetailTitle>{" "}
              <div>
                {game.genres.map((genre, index) => (
                  <ButtonItem key={index}>{genre}</ButtonItem>
                ))}
              </div>
            </div>
          </DetailContainer>

          <DetailButton onClick={() => navigate("/home")}>
             GO HOME
          </DetailButton>
        </div>
      )}
    </div>
  );
}

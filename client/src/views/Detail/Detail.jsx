import React from "react";
import {
  DetailContainer,
  DetailInfo,
  DetailText,
  DetailTitle,
  DetailImage,
  DetailButton,
} from "./DetailStyles";
import { BiArrowBack } from "react-icons/bi";
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
        if (gameData.name) {
          const genresList = [];
          gameData.Genres.forEach(genre => {
            genresList.push(genre.name)
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
        window.alert("Error occurred while fetching data");
      })
      .finally(() => {
        setIsDataLoading(false);
        setIsLoading(false);
      });
  }, [detailId]);

  return (
    <div>
      {console.log(isLoading)}
      {isLoading || isDataLoading ? (
        <Loading />
      ) : (
        <div>
          <DetailContainer>
            <DetailInfo>
              {game.id && (
                <DetailText>
                  <DetailTitle>ID:</DetailTitle> {game.id}
                </DetailText>
              )}
              {game.name && (
                <DetailText>
                  <DetailTitle>Name:</DetailTitle> {game.name}
                </DetailText>
              )}
              {game.image && (
                <DetailImage src={game.image} alt={`Image of ${game.name}`} />
              )}
              {game.platforms.length > 0 && (
                <DetailText>
                  <DetailTitle>Platforms:</DetailTitle>{" "}
                  {game.platforms.join(", ")}
                </DetailText>
              )}
              {game.genres.length > 0 && (
                <DetailText>
                  <DetailTitle>Genres:</DetailTitle>{" "}
                  {game.genres.join(", ")}
                </DetailText>
              )}
              {game.description && (
                <DetailText>
                  <DetailTitle>Description:</DetailTitle> {game.description}
                </DetailText>
              )}
              {game.release_date && (
                <DetailText>
                  <DetailTitle>Release date:</DetailTitle>{" "}
                  {game.release_date}
                </DetailText>
              )}
            </DetailInfo>
          </DetailContainer>
          <DetailButton onClick={() => navigate("/home")}>
            <BiArrowBack /> Back
          </DetailButton>
        </div>
      )}
    </div>
  
  );
}

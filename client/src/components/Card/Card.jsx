import React from "react";
import { CardContainer, CardImage, CardContent, CardTitle, GenreList, GenreItem} from "../Card/CardStyles";


function Card({ image, name, genres }) {

  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <GenreList>
          {genres && genres.length > 0 ? (
            genres.map((genre, index) => (
              <GenreItem key={index}>{genre}</GenreItem>
            ))
          ) : (
            <GenreItem>No genres available</GenreItem>
          )}
        </GenreList>
      </CardContent>
    </CardContainer>
  );
}

export default Card;

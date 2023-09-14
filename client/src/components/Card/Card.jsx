import React from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  GenreList,
  GenreItem,
  CardRating
} from "../Card/CardStyles";

function Card({ image, name, genres, rating }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardTitle style={{  textTransform: 'uppercase' }}>{name}</CardTitle>  
        <CardRating>{rating}</CardRating>      
        <GenreList>
          {genres && genres.length > 0 ? (
            genres.map((genre, index) => (
              <GenreItem key={index}>{genre.name}</GenreItem>
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

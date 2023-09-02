import React from "react";
import { CardContenedor, ImgCardContenedor } from "./CardStyles";


function Card({ image, name, genres }) {
  return (
    <CardContenedor>
      <ImgCardContenedor src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <div>
          {genres && genres.length > 0 ? (
            genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))
          ) : (
            <span>No genres available</span>
          )}
        </div>
      </div>
    </CardContenedor>
  );
}

export default Card;

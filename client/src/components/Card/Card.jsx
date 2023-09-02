// import React from 'react';


// export default function Card(props) {
//   return (
//     <div>
    
//     <CardContenedor>        
//       { props.onClose && <CloseButtonCard onClick={props.onClose}>X</CloseButtonCard>}
//       <CharId>{props.id}</CharId>
//       <NameLink to={`/detail/${props.id}`}>
//         <h2>{props.name}</h2>
//       </NameLink>
//       <Species>{props.species}</Species>
//       <Gender>{props.gender}</Gender>
//       <ImgCardContenedor src={props.image} alt="Videogame picture" />
//     </CardContenedor>
  
//      <Species>cards aqui</Species>
//     </div>
//   );
// }

import React from "react";
import { CardContenedor } from "./CardStyles";


function Card({ id, image, name, genres }) {
  return (
    <CardContenedor>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <div>
          {genres && genres.length > 0 ? (
            genres.map((genre, id) => (
              <span key={id}>{genre}</span>
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

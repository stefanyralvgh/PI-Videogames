import React from 'react';
import { Species } from './CardStyles';

export default function Card(props) {
  return (
    <div>
    
    <CardContenedor>        
      { props.onClose && <CloseButtonCard onClick={props.onClose}>X</CloseButtonCard>}
      <CharId>{props.id}</CharId>
      <NameLink to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </NameLink>
      <Species>{props.species}</Species>
      <Gender>{props.gender}</Gender>
      <ImgCardContenedor src={props.image} alt="character picture" />
    </CardContenedor>
  
     <Species>cards aqui</Species>
    </div>
  );
}

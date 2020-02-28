import React from "react";

export default function CharacterCard({character}) {
  return (
    <div className='character-card'>
      <img src={character.image} alt={character.name}></img>
      <h3>{character.name}</h3>
      <p>{character.species}</p>
    </div>
  );
}

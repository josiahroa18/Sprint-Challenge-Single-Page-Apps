import React from "react";

export default function LocationCard(props) {
  console.log(props);
  return (
    <div className='location-card'>
      <h3>{props.location.name}</h3>
      <p>{props.location.type}</p>
      <p>{props.location.dimension}</p>
    </div>
  );
}

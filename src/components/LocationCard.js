import React from "react";
import { Link } from 'react-router-dom';

export default function LocationCard(props) {
  return (
    <div className='location-card'>
      <h3>{props.location.name}</h3>
      <p>{props.location.type}</p>
      <p>{props.location.dimension}</p>
      <Link to={`details/${props.location.id}`}>Details</Link>
    </div>
  );
}

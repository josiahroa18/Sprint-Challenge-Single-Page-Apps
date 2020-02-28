import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/')
        .then(res => {
            setData(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <section className='location-container'>
            <h1>Location List</h1>
            <div className='card-container'>
                {data.map(location => {
                    return <LocationCard key={location.id} location={location}/>
                })}
        </div>
        </section>
    )
}

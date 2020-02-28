import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details(){
    const[data, setData] = useState([]);
    const[characters, setCharacters] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/${id}`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
            res.data.residents.forEach(resident => {
                axios.get(resident)
                .then(res => {
                    console.log(res.data);
                    setCharacters([...characters, res.data]);
                })
                .catch(err => {
                    console.log(err);
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div className='details-container'>
            <h3>{data.name}</h3>
            <p>{data.type}</p>
            <p>{data.dimension}</p>
            <h2>Residents</h2>
            {characters.map(character => {
                return <CharacterCard key={character.id} character={character}/>
            })}
        </div>
    )
}

export default Details;
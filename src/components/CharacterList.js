import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(res => {
      setData(res.data.results);
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if(search){
      setSearchData(data.filter(character => character.name.toLowerCase().includes(search.toLowerCase())));
    }else{
      setSearchData(data);
    }
  }, [search, data]);

  function handleChange(e){
    setSearch(e.target.value);
  }

  return (
    <section className="character-list">
      <SearchForm handleChange={handleChange}/>
      {/* Display Character Data */}
      <div className='card-container'>
        {searchData.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })}
      </div>
    </section>
  );
}

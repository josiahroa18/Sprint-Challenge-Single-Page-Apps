import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
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
      setSearchData(data.filter(character => character.name.includes(search)));
    }else{
      setSearchData(data);
    }
  }, [search, data]);

  function handleChange(e){
    setSearch(e.target.value);
  }

  return (
    <section className="character-list">
      <form>
        <label>Search</label>
        <input placeholder='name' type='text' onChange={handleChange}></input>
      </form>
      {/* Display Character Data */}
      <div>
        {searchData.map(character => {
          return <CharacterCard key={character.id} character={character}/>
        })}
      </div>
    </section>
  );
}

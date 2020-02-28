import React from "react";

export default function SearchForm({handleChange}) {
 
  return (
    <form>
      <label>Search</label>
      <input placeholder='name' type='text' onChange={handleChange}></input>
    </form>
  );
}

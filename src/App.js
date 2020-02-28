import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import { Route } from 'react-router-dom';

import './App.css';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage/>
      </Route>
      <Route path='/characters'>
        <CharacterList/>
      </Route>
      <Route path='/locations'>
        <LocationsList/>
      </Route>
    </main>
  );
}

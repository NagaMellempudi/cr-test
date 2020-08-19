import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import PetHome from "./components/PetHome.js";

function App() {
  const [reloadPetList, setReloadPetList] = useState(false);

  return (
    <div className="App">
      <PetHome reloadPetList={reloadPetList} />
    </div>
  );
}

export default App;

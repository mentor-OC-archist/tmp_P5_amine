// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import logementsdata from './logements.json'; 

function App() {
  const logements = logementsdata;


  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des logements</h1>
      </header>
      <main>
        {logements.length > 0 ? (
          <ul>
            {logements.map(logement => (
              <li key={logement.id}>
                <h2>{logement.title}</h2>
                <img src={logement.cover} alt={logement.title} />
                <p>{logement.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Chargement des logements...</p>
        )}
      </main>
    </div>
  );
}

export default App;

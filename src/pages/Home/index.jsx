// App.js
import React, { useState, useEffect } from 'react';
import logementsdata from '../../utils/logements.json'; 
import Location from '../../components/Location'

function Home() {
  
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(logementsdata)
  }, [])


  return (
    <div className="App">
      <main>
        <Location logements={logements} />

      </main>
    </div>
  );
}

export default Home;
